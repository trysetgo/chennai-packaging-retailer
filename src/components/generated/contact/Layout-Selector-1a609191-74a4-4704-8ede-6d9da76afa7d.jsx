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
      columns: normalizedColumns.map((col, colIndex) => ({
        id:
          col?.id || `${row?.id || `row-${rowIndex + 1}`}-col-${colIndex + 1}`,
        style: { ...(col?.style || {}) },
        children: Array.isArray(col?.children) ? col.children : [],
      })),
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
    stackOnMobile = false,
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
  const [isMobile, setIsMobile] = useState(false);
  const normalizedRows = useMemo(
    () => normalizeRows(props?.rows || []),
    [props?.rows],
  );

  const rowsToRender = useMemo(() => {
    if (!isPreviewing) return normalizedRows;
    return normalizedRows.filter((row) =>
      row.columns.some(
        (col) => Array.isArray(col.children) && col.children.length > 0,
      ),
    );
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

      for (const row of newRows) {
        const sourceCol = row.columns.find((col) => col.id === sourceColumnId);

        if (
          sourceCol &&
          sourceCol.children &&
          sourceCol.children.length > sourceItemIndex
        ) {
          if (sourceCol.children[sourceItemIndex]?.id === draggedItemId) {
            draggedItem = sourceCol.children.splice(sourceItemIndex, 1)[0];
            itemFoundAndRemoved = true;
            break;
          }
        }
      }

      if (!draggedItem) {
        return;
      }

      let itemAddedToTarget = false;
      for (const row of newRows) {
        const targetCol = row.columns.find((col) => col.id === targetColumnId);
        if (targetCol) {
          if (!targetCol.children) {
            targetCol.children = [];
          }

          const safeTargetIndex = Math.min(
            targetItemIndex,
            targetCol.children.length,
          );
          targetCol.children.splice(safeTargetIndex, 0, draggedItem);
          itemAddedToTarget = true;
          break;
        }
      }

      if (itemFoundAndRemoved && itemAddedToTarget) {
        if (updateElement && id) {
          updateElement(id, { props: { ...props, rows: newRows } });
        }
      }
    },
    [normalizedRows, id, updateElement, props],
  );

  if (isPreviewing && rowsToRender.length === 0) {
    return null;
  }

  return (
    <div style={containerStyle} ref={layoutContainerRef}>
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
              const currentBorder = colData.style?.border || columnBorder;
              const currentMinHeight =
                colData.style?.minHeight || columnMinHeight;
              return (
                <React.Fragment
                  key={colData.id || `col-${rowIndex}-${colIndex}`}
                >
                  <LayoutColumn
                    rowIndex={rowIndex}
                    columnIndex={colIndex}
                    columnId={colData.id}
                    style={{
                      background:
                        colData.style?.background ||
                        colData.style?.backgroundColor ||
                        columnBackground,
                      ...colData.style,
                      border:
                        isPreviewing && currentBorder === DEFAULT_COLUMN_BORDER
                          ? "none"
                          : currentBorder,
                      borderRadius: colData.style?.borderRadius || columnRadius,
                      padding: colData.style?.padding || columnPadding,
                      minHeight:
                        isPreviewing &&
                        currentMinHeight === DEFAULT_COLUMN_MIN_HEIGHT
                          ? "auto"
                          : currentMinHeight,
                      boxShadow: colData.style?.boxShadow || columnShadow,
                      ...(stackOnMobile && isMobile
                        ? {
                            flexBasis: "100%",
                            width: "100%",
                            maxWidth: "100%",
                          }
                        : {}),
                    }}
                    onDropItem={(droppedColumnId, droppedItemPayload) => {
                      if (typeof onDropItem === "function") {
                        onDropItem(
                          droppedColumnId,
                          droppedItemPayload,
                          rowIndex,
                          colIndex,
                        );
                      }
                    }}
                    onMoveItem={handleInternalItemMove}
                    elements={colData.children || []}
                    commonChildProps={commonChildProps}
                    index={colIndex}
                    slotLabel={`Column ${colIndex + 1}`}
                    emptyStateTitle="Drop components here"
                    emptyStateHint="Build this area with text, cards, forms, media, or any component."
                    displayId=""
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      ))}
    </div>
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
  stackOnMobile: false,
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
