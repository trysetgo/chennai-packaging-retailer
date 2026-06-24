"use client";

import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import LayoutColumn from "../../LayoutColumn";
import PropTypes from "prop-types";
import { availableComponents } from "../availableComponents.js";

const DEFAULT_ROW_GAP = "18px";
const DEFAULT_CONTAINER_PADDING = "18px";
const DEFAULT_CONTAINER_BG = "transparent";
const DEFAULT_CONTAINER_MARGIN = "0px auto";
const DEFAULT_CONTAINER_RADIUS = "0px";
const DEFAULT_CONTAINER_MIN_HEIGHT = "140px";
const DEFAULT_BREAKPOINT = "768px";
const DEFAULT_ACCENT_COLOR = "#ec3080";
const DEFAULT_SECONDARY_ACCENT_COLOR = "#6366f1";
const DEFAULT_ROW_BACKGROUND = "transparent";
const DEFAULT_ROW_BORDER = "1px solid rgba(226,232,240,0.9)";
const DEFAULT_ROW_RADIUS = "0px";
const DEFAULT_ROW_PADDING = "14px";
const DEFAULT_ROW_SHADOW = "none";
const DEFAULT_COLUMN_BACKGROUND = "transparent";
const DEFAULT_COLUMN_BORDER = "1px dashed rgba(203,213,225,0.9)";
const DEFAULT_COLUMN_RADIUS = "0px";
const DEFAULT_COLUMN_PADDING = "14px";
const DEFAULT_COLUMN_MIN_HEIGHT = "120px";
const DEFAULT_COLUMN_SHADOW = "none";

const parsePxFromString = (value, fallback) => {
  const match = String(value || "")
    .trim()
    .match(/^(\d+(\.\d+)?)px$/i);
  if (!match) return fallback;
  const parsed = Number(match[1]);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeRows = (rows = []) =>
  (Array.isArray(rows) ? rows : []).map((row, rowIndex) => {
    const columns = Array.isArray(row?.columns) ? row.columns : [];
    const desiredCount = Math.max(
      1,
      Number(row?.numColumns) || columns.length || 1,
    );
    const normalizedColumns =
      columns.length >= desiredCount
        ? columns.slice(0, desiredCount)
        : [
            ...columns,
            ...Array.from({ length: desiredCount - columns.length }).map(
              (_, colOffset) => ({
                id: `${row?.id || `row-${rowIndex}`}-col-${columns.length + colOffset + 1}`,
                style: {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: `${(100 / desiredCount).toFixed(2)}%`,
                },
                children: [],
              }),
            ),
          ];

    return {
      id: row?.id || `row-${rowIndex + 1}`,
      numColumns: desiredCount,
      columns: normalizedColumns.map((col, colIndex) => {
        const colId =
          col?.id || `${row?.id || `row-${rowIndex + 1}`}-col-${colIndex + 1}`;
        const outCol = {
          id: colId,
          style: { ...(col?.style || {}) },
          children: Array.isArray(col?.children) ? col.children : [],
        };
        if (col?.subColumns && Array.isArray(col.subColumns)) {
          outCol.subColumns = col.subColumns.map((sub, sIdx) => ({
            id: sub?.id || `${colId}-sub-${sIdx + 1}`,
            style: { ...(sub?.style || {}) },
            children: Array.isArray(sub?.children) ? sub.children : [],
          }));
        }
        return outCol;
      }),
    };
  });

const LayoutSelector = ({
  id,
  props,
  onDropItem,
  onMoveItem,
  commonChildProps,
  isSelected,
  updateElement,
  updateElementProps,
}) => {
  const {
    gap: rowGap = DEFAULT_ROW_GAP,
    padding: containerPadding = DEFAULT_CONTAINER_PADDING,
    backgroundColor: containerBackgroundColor = DEFAULT_CONTAINER_BG,
    margin: containerMargin = DEFAULT_CONTAINER_MARGIN,
    boxShadow: containerBoxShadow = "0 24px 60px rgba(15,23,42,0.1)",
    borderRadius: containerBorderRadius = DEFAULT_CONTAINER_RADIUS,
    border: containerBorder = "1px solid rgba(226,232,240,0.9)",
    minHeight: containerMinHeight = DEFAULT_CONTAINER_MIN_HEIGHT,
    width: containerWidth = "100%",
    maxWidth: containerMaxWidth = "100%",
    stackOnMobile = true,
    mobileBreakpoint = DEFAULT_BREAKPOINT,
    accentColor = DEFAULT_ACCENT_COLOR,
    secondaryAccentColor = DEFAULT_SECONDARY_ACCENT_COLOR,
    rowBackground = DEFAULT_ROW_BACKGROUND,
    rowBorder = DEFAULT_ROW_BORDER,
    rowRadius = DEFAULT_ROW_RADIUS,
    rowPadding = DEFAULT_ROW_PADDING,
    rowShadow = DEFAULT_ROW_SHADOW,
    columnBackground = DEFAULT_COLUMN_BACKGROUND,
    columnBorder = DEFAULT_COLUMN_BORDER,
    columnRadius = DEFAULT_COLUMN_RADIUS,
    columnPadding = DEFAULT_COLUMN_PADDING,
    columnMinHeight = DEFAULT_COLUMN_MIN_HEIGHT,
    columnShadow = DEFAULT_COLUMN_SHADOW,
    showRowLabels = true,
  } = props || {};
  const { isPreviewing } = commonChildProps || {};

  const layoutContainerRef = useRef(null);
  const lastDropRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const normalizedRows = useMemo(
    () => normalizeRows(props?.rows || []),
    [props?.rows],
  );
  const [showPalette, setShowPalette] = useState(false);
  const [paletteSearch, setPaletteSearch] = useState("");
  const [targetCol, setTargetCol] = useState(null);
  const [addingComponentId, setAddingComponentId] = useState(null);
  const layoutClassName = `layout-selector-${id || Math.random().toString(36).substr(2, 9)}`;

  const flatComponents = useMemo(() => {
    const flat = [];
    const extract = (items) => {
      items.forEach((item) => {
        if (item.components && Array.isArray(item.components))
          extract(item.components);
        else if (item.items && Array.isArray(item.items)) extract(item.items);
        else if (item.children && Array.isArray(item.children))
          extract(item.children);
        else if (
          item.name &&
          item.type !== "group" &&
          item.id !== "group-widgets" &&
          item.id !== "group-custom-components"
        )
          flat.push(item);
      });
    };
    if (Array.isArray(availableComponents)) extract(availableComponents);
    return flat;
  }, []);

  const filteredPaletteComponents = useMemo(() => {
    if (!paletteSearch.trim()) return flatComponents;
    const q = paletteSearch.toLowerCase();
    return flatComponents.filter((c) => c.name.toLowerCase().includes(q));
  }, [flatComponents, paletteSearch]);

  const rowsToRender = useMemo(() => {
    if (!isPreviewing) return normalizedRows;
    return normalizedRows.filter((row) => {
      return row.columns.some((col) => {
        if (Array.isArray(col.children) && col.children.length > 0) return true;
        if (
          col.subColumns &&
          col.subColumns.some(
            (sub) => Array.isArray(sub.children) && sub.children.length > 0,
          )
        )
          return true;
        return false;
      });
    });
  }, [normalizedRows, isPreviewing]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const breakpointPx = parsePxFromString(mobileBreakpoint, 768);
    const mediaQuery = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const onChange = (event) => setIsMobile(event.matches);
    setIsMobile(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    }
    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, [mobileBreakpoint]);

  // Intercept misplaced external drops into parent columns that have subcolumns
  useEffect(() => {
    let needsUpdate = false;
    const nextRows = JSON.parse(JSON.stringify(normalizedRows));

    nextRows.forEach((row, rIdx) => {
      row.columns.forEach((col, cIdx) => {
        if (
          col.subColumns &&
          col.subColumns.length > 0 &&
          col.children &&
          col.children.length > 0
        ) {
          needsUpdate = true;
          let targetSubIndex = 0;
          if (
            lastDropRef.current &&
            lastDropRef.current.rowIndex === rIdx &&
            lastDropRef.current.colIndex === cIdx
          ) {
            targetSubIndex = lastDropRef.current.subIndex;
            if (targetSubIndex >= col.subColumns.length) targetSubIndex = 0;
          }
          const itemsToMove = col.children.splice(0, col.children.length);
          if (!col.subColumns[targetSubIndex].children)
            col.subColumns[targetSubIndex].children = [];
          col.subColumns[targetSubIndex].children.push(...itemsToMove);
        }
      });
    });

    const updaterProps =
      updateElementProps || commonChildProps?.updateElementProps;
    if (needsUpdate && id) {
      lastDropRef.current = null;
      if (updaterProps) {
        updaterProps(id, { props: { ...props, rows: nextRows } });
      } else if (updateElement) {
        updateElement(id, { props: { ...props, rows: nextRows } });
      }
    }
  }, [
    normalizedRows,
    updateElement,
    updateElementProps,
    commonChildProps,
    id,
    props,
  ]);

  const containerStyle = {
    border:
      isPreviewing && containerBorder === "1px solid rgba(226,232,240,0.9)"
        ? "none"
        : isSelected
          ? "2px dashed #4f46e5"
          : containerBorder,
    padding: containerPadding,
    minHeight:
      isPreviewing && containerMinHeight === DEFAULT_CONTAINER_MIN_HEIGHT
        ? "auto"
        : containerMinHeight,
    background: containerBackgroundColor,
    margin: containerMargin,
    boxShadow: containerBoxShadow,
    borderRadius: containerBorderRadius,
    width: containerWidth,
    maxWidth: containerMaxWidth,
    display: "flex",
    flexDirection: "column",
    gap: rowGap,
    position: "relative",
    overflow: "hidden",
    isolation: "isolate",
  };

  const handleInternalItemMove = useCallback(
    (
      draggedItemId,
      sourceColumnId,
      sourceItemIndex,
      targetColumnId,
      targetItemIndex,
    ) => {
      const newRows = JSON.parse(JSON.stringify(normalizedRows));
      let draggedItem = null;
      let itemFoundAndRemoved = false;

      const removeOut = (cols) => {
        for (let i = 0; i < cols.length; i++) {
          const col = cols[i];
          if (col.id === sourceColumnId && col.children) {
            const foundIdx = col.children.findIndex(
              (c) => c.id === draggedItemId,
            );
            if (foundIdx !== -1) {
              draggedItem = col.children.splice(foundIdx, 1)[0];
              itemFoundAndRemoved = true;
              return true;
            }
          }
          if (col.subColumns && removeOut(col.subColumns)) return true;
        }
        return false;
      };

      for (const row of newRows) {
        if (removeOut(row.columns)) break;
      }

      if (!draggedItem) return;

      let itemAddedToTarget = false;
      const insertIn = (cols) => {
        for (let i = 0; i < cols.length; i++) {
          const col = cols[i];
          if (col.id === targetColumnId) {
            if (!col.children) col.children = [];
            const safeIdx = Math.min(targetItemIndex, col.children.length);
            col.children.splice(safeIdx, 0, draggedItem);
            itemAddedToTarget = true;
            return true;
          }
          if (col.subColumns && insertIn(col.subColumns)) return true;
        }
        return false;
      };

      for (const row of newRows) {
        if (insertIn(row.columns)) break;
      }

      if (itemFoundAndRemoved && itemAddedToTarget) {
        const updaterProps =
          updateElementProps || commonChildProps?.updateElementProps;
        if (updaterProps && id) {
          updaterProps(id, { props: { ...props, rows: newRows } });
        } else if (updateElement && id) {
          updateElement(id, { props: { ...props, rows: newRows } });
        }
      }
    },
    [
      normalizedRows,
      id,
      updateElement,
      updateElementProps,
      commonChildProps,
      props,
    ],
  );

  if (isPreviewing && rowsToRender.length === 0) {
    return null;
  }

  return (
    <>
      {stackOnMobile && (
        <style>
          {`
            @media (max-width: 1024px) {
              .${layoutClassName} .main-col, .${layoutClassName} .split-col {
                flex-basis: 100% !important;
                width: 100% !important;
                max-width: 100% !important;
              }
            }
            @media (max-width: ${mobileBreakpoint}) {
              .${layoutClassName} .sub-col {
                flex-basis: 100% !important;
                width: 100% !important;
                max-width: 100% !important;
              }
              .${layoutClassName} .split-col {
                flex-direction: column !important;
              }
            }
          `}
        </style>
      )}
      <div
        className={layoutClassName}
        style={containerStyle}
        ref={layoutContainerRef}
      >
        {rowsToRender.map((row, rowIndex) => (
          <div
            key={row.id || `row-${rowIndex}`}
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: rowPadding,
              borderRadius: rowRadius,
              background: rowBackground,
              border:
                isPreviewing && rowBorder === DEFAULT_ROW_BORDER
                  ? "none"
                  : rowBorder,
              boxShadow: rowShadow,
            }}
          >
            {!isPreviewing && showRowLabels ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 12px",
                      borderRadius: "999px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: accentColor,
                      background: `${accentColor}12`,
                      border: `1px solid ${accentColor}24`,
                    }}
                  >
                    Row {rowIndex + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    {row.columns.length} flexible slot
                    {row.columns.length > 1 ? "s" : ""}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}
                >
                  Drag components into any zone below
                </span>
              </div>
            ) : null}
            <div
              className="flex w-full"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: rowGap,
              }}
            >
              {row.columns.map((colData, colIndex) => {
                const renderColumnInner = (
                  data,
                  cIdx,
                  isSub = false,
                  parentColIndex = null,
                ) => {
                  const currentBorder = data.style?.border || columnBorder;
                  const currentMinHeight =
                    data.style?.minHeight || columnMinHeight;

                  const colProps = {
                    style: {
                      background:
                        data.style?.background ||
                        data.style?.backgroundColor ||
                        columnBackground,
                      ...data.style,
                      border:
                        isPreviewing && currentBorder === DEFAULT_COLUMN_BORDER
                          ? "none"
                          : currentBorder,
                      borderRadius: data.style?.borderRadius || columnRadius,
                      padding: data.style?.padding || columnPadding,
                      minHeight:
                        isPreviewing &&
                        currentMinHeight === DEFAULT_COLUMN_MIN_HEIGHT
                          ? "auto"
                          : currentMinHeight,
                      boxShadow: data.style?.boxShadow || columnShadow,
                      ...(stackOnMobile && isMobile
                        ? {
                            flexBasis: "100%",
                            width: "100%",
                            maxWidth: "100%",
                          }
                        : {}),
                    },
                  };

                  if (data.subColumns && data.subColumns.length > 0) {
                    return (
                      <div
                        key={data.id || `col-split-${rowIndex}-${cIdx}`}
                        className="responsive-col split-col"
                        style={{
                          ...colProps.style,
                          display: "flex",
                          flexWrap: "wrap",
                          gap: rowGap,
                        }}
                      >
                        {data.subColumns.map((sub, sIdx) =>
                          renderColumnInner(sub, sIdx, true, cIdx),
                        )}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={
                        data.id ||
                        `col-${rowIndex}-${cIdx}${isSub ? `-${parentColIndex}` : ""}`
                      }
                      style={{ display: "contents" }}
                    >
                      <div
                        className={`responsive-col ${isSub ? "sub-col" : "main-col"} flex w-full h-full flex-col`}
                        style={colProps.style}
                      >
                        <LayoutColumn
                          rowIndex={rowIndex}
                          columnIndex={isSub ? parentColIndex : cIdx}
                          columnId={data.id}
                          style={{ width: "100%", height: "100%" }}
                          onDropItem={(droppedColumnId, droppedItemPayload) => {
                            if (isSub) {
                              lastDropRef.current = {
                                rowIndex,
                                colIndex: parentColIndex,
                                subIndex: cIdx,
                              };
                            }
                            if (typeof onDropItem === "function") {
                              onDropItem(
                                isSub ? colData.id : droppedColumnId,
                                droppedItemPayload,
                                rowIndex,
                                isSub ? parentColIndex : cIdx,
                                isSub ? cIdx : undefined,
                              );
                            }
                          }}
                          onAddClick={() => {
                            if (
                              !isPreviewing &&
                              typeof onDropItem === "function"
                            ) {
                              setTargetCol({
                                columnId: data.id,
                                parentColumnId: colData.id,
                                isSub,
                                rowIndex,
                                cIdx: isSub ? parentColIndex : cIdx,
                                subIdx: isSub ? cIdx : undefined,
                              });
                              setShowPalette(true);
                            }
                          }}
                          onMoveItem={handleInternalItemMove}
                          elements={data.children || []}
                          commonChildProps={commonChildProps}
                          index={isSub ? cIdx : cIdx}
                          slotLabel={
                            isSub ? `Sub-Col ${cIdx + 1}` : `Column ${cIdx + 1}`
                          }
                          emptyStateTitle="Drop components here"
                          emptyStateHint="Build this area with text, cards, forms, media, or any component."
                          displayId=""
                        />
                      </div>
                    </div>
                  );
                };

                return renderColumnInner(colData, colIndex, false);
              })}
            </div>
          </div>
        ))}
      </div>

      {showPalette && targetCol && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm cursor-default"
          onClick={(e) => {
            e.stopPropagation();
            setShowPalette(false);
            setTargetCol(null);
          }}
        >
          <div
            className="w-[600px] max-w-[90vw] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Component Palette
                </h3>
                <button
                  onClick={() => {
                    setShowPalette(false);
                    setTargetCol(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  &times;
                </button>
              </div>
              <input
                type="text"
                placeholder="Search components..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={paletteSearch}
                onChange={(e) => setPaletteSearch(e.target.value)}
                autoFocus
              />
            </div>
            <div className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2 text-left pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
              {filteredPaletteComponents.map((comp, idx) => (
                <button
                  key={`${comp.id || comp.name}-${idx}`}
                  disabled={addingComponentId !== null}
                  onClick={async (e) => {
                    e.stopPropagation();
                    if (addingComponentId) return;
                    const compId = `${comp.id || comp.name}-${idx}`;
                    setAddingComponentId(compId);

                    const componentType =
                      comp.dragType || comp.type || comp.name;
                    const componentDefinition = {
                      type: componentType,
                      id: comp.id,
                      name: comp.name,
                      isCustom: comp.isCustom,
                      filePath: comp.filePath,
                      defaultProps: comp.defaultProps || {},
                    };
                    try {
                      if (typeof onDropItem === "function") {
                        if (targetCol.isSub) {
                          lastDropRef.current = {
                            rowIndex: targetCol.rowIndex,
                            colIndex: targetCol.cIdx,
                            subIndex: targetCol.subIdx,
                          };
                        }
                        await Promise.resolve(
                          onDropItem(
                            targetCol.isSub
                              ? targetCol.parentColumnId
                              : targetCol.columnId,
                            componentDefinition,
                            targetCol.rowIndex,
                            targetCol.cIdx,
                            targetCol.subIdx,
                          ),
                        );
                      }
                    } finally {
                      setAddingComponentId(null);
                      setShowPalette(false);
                      setTargetCol(null);
                      setPaletteSearch("");
                    }
                  }}
                  className={`p-2 border border-gray-100 dark:border-gray-700 rounded-lg transition-colors flex flex-col items-start ${addingComponentId === `${comp.id || comp.name}-${idx}` ? "bg-indigo-50 border-indigo-300 dark:bg-indigo-900/30" : "hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"} ${addingComponentId !== null && addingComponentId !== `${comp.id || comp.name}-${idx}` ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="font-medium text-sm text-gray-800 dark:text-gray-200 w-full flex items-center justify-between">
                    <span className="truncate">{comp.name}</span>
                    {addingComponentId === `${comp.id || comp.name}-${idx}` && (
                      <svg
                        className="animate-spin h-4 w-4 text-indigo-500 shrink-0 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </span>
                </button>
              ))}
              {filteredPaletteComponents.length === 0 && (
                <div className="col-span-full py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  No components match your search.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

LayoutSelector.propTypes = {
  id: PropTypes.string.isRequired,
  props: PropTypes.shape({
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        numColumns: PropTypes.number,
        columns: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            style: PropTypes.object,
            children: PropTypes.array,
          }),
        ),
      }),
    ),
    gap: PropTypes.string,
    padding: PropTypes.string,
    backgroundColor: PropTypes.string,
    margin: PropTypes.string,
    boxShadow: PropTypes.string,
    borderRadius: PropTypes.string,
    border: PropTypes.string,
    minHeight: PropTypes.string,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    stackOnMobile: PropTypes.bool,
    mobileBreakpoint: PropTypes.string,
    accentColor: PropTypes.string,
    secondaryAccentColor: PropTypes.string,
    rowBackground: PropTypes.string,
    rowBorder: PropTypes.string,
    rowRadius: PropTypes.string,
    rowPadding: PropTypes.string,
    rowShadow: PropTypes.string,
    columnBackground: PropTypes.string,
    columnBorder: PropTypes.string,
    columnRadius: PropTypes.string,
    columnPadding: PropTypes.string,
    columnMinHeight: PropTypes.string,
    columnShadow: PropTypes.string,
    showRowLabels: PropTypes.bool,
  }),
  onDropItem: PropTypes.func,
  onMoveItem: PropTypes.func,
  commonChildProps: PropTypes.object,
  isSelected: PropTypes.bool,
  updateElement: PropTypes.func,
};

export const layoutSelectorDefaultProps = {
  rows: [
    {
      id: "default-row-1",
      numColumns: 1,
      columns: [
        {
          id: "default-row-1-col-1",
          children: [],
        },
      ],
    },
  ],
  gap: DEFAULT_ROW_GAP,
  padding: DEFAULT_CONTAINER_PADDING,
  backgroundColor: DEFAULT_CONTAINER_BG,
  margin: DEFAULT_CONTAINER_MARGIN,
  boxShadow: "none",
  borderRadius: DEFAULT_CONTAINER_RADIUS,
  border: "1px solid rgba(226,232,240,0.9)",
  minHeight: DEFAULT_CONTAINER_MIN_HEIGHT,
  width: "100%",
  maxWidth: "100%",
  stackOnMobile: true,
  mobileBreakpoint: DEFAULT_BREAKPOINT,
  accentColor: DEFAULT_ACCENT_COLOR,
  secondaryAccentColor: DEFAULT_SECONDARY_ACCENT_COLOR,
  rowBackground: DEFAULT_ROW_BACKGROUND,
  rowBorder: DEFAULT_ROW_BORDER,
  rowRadius: DEFAULT_ROW_RADIUS,
  rowPadding: DEFAULT_ROW_PADDING,
  rowShadow: DEFAULT_ROW_SHADOW,
  columnBackground: DEFAULT_COLUMN_BACKGROUND,
  columnBorder: DEFAULT_COLUMN_BORDER,
  columnRadius: DEFAULT_COLUMN_RADIUS,
  columnPadding: DEFAULT_COLUMN_PADDING,
  columnMinHeight: DEFAULT_COLUMN_MIN_HEIGHT,
  columnShadow: DEFAULT_COLUMN_SHADOW,
  showRowLabels: true,
};

export default LayoutSelector;
