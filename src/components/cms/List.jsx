import React from "react";
import PropTypes from "prop-types";

const ListComponent = ({
  id,
  items = [],
  ordered = false,
  listStyleType,
  listStylePosition,
  markerColor,
  itemTextColor,
  itemFontSize,
  itemFontWeight,
  itemFontStyle,
  itemLineHeight,
  paddingLeft,
  marginTop = "0px",
  marginRight = "0px",
  marginBottom = "0.5rem",
  marginLeft = "0px",
  paddingTop = "0px",
  paddingRight = "0px",
  paddingBottom = "0px",

  listBackgroundColor,
  listBorder,
  listBorderRadius,
  boxShadow = "none",
  showItemDividers,
  dividerColor,
  itemBackgroundColor,
  itemHoverBackgroundColor,
  itemPadding,
  itemMarginBottom,
  itemTextDecoration,
  itemBorderRadius,
  containerMaxWidth,
  containerAlign,
  className = "",
  style = {},
}) => {
  const ListTag = ordered ? "ol" : "ul";
  const defaultItems = ["Item 1", "Item 2", "Item 3"];
  const listItemsRaw =
    items.length > 0 ? items : defaultItems.map((text, index) => ({ id: `default-${index}`, text }));

  const listItems = listItemsRaw.map((item, index) => {
    if (typeof item === "string") {
      return { id: `item-${index}`, text: item };
    }
    return item || { id: `item-${index}`, text: "List Item" };
  });

  const scopedClass = `list-component-${String(id || "default").replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const normalizedStyleType = listStyleType || (ordered ? "decimal" : "disc");

  const listContainerStyle = {
    listStyleType: normalizedStyleType,
    listStylePosition,
    paddingLeft: paddingLeft || "2.5rem",
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    backgroundColor: listBackgroundColor,
    border: listBorder,
    borderRadius: listBorderRadius,
    boxShadow,
    maxWidth: containerMaxWidth,
    width: "100%",
    marginInline:
      containerAlign === "center" ? "auto" : containerAlign === "right" ? "0 0 0 auto" : undefined,
    ...style,
  };

  const listItemStyle = {
    color: itemTextColor,
    fontSize: itemFontSize,
    fontWeight: itemFontWeight,
    fontStyle: itemFontStyle,
    lineHeight: itemLineHeight,
    backgroundColor: itemBackgroundColor,
    padding: itemPadding,
    marginBottom: itemMarginBottom,
    textDecoration: itemTextDecoration,
    borderRadius: itemBorderRadius,
    borderBottom: showItemDividers ? `1px solid ${dividerColor}` : "none",
  };

  return (
    <>
      <style>{`
        .${scopedClass} li::marker { color: ${markerColor}; }
        .${scopedClass} li:hover { background-color: ${itemHoverBackgroundColor}; }
        .${scopedClass} li:last-child { border-bottom: none; margin-bottom: 0; }
      `}</style>
      <ListTag style={listContainerStyle} className={`${scopedClass} ${className}`.trim()}>
        {listItems.map((item) => (
          <li
            key={item.id || item.text}
            className="paragraph-content transition-colors"
            style={listItemStyle}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: item.text || "List Item",
              }}
            />
          </li>
        ))}
      </ListTag>
    </>
  );
};

ListComponent.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ]),
  ),
  ordered: PropTypes.bool,
  listStyleType: PropTypes.string,
  listStylePosition: PropTypes.oneOf(["inside", "outside"]),
  markerColor: PropTypes.string,
  itemTextColor: PropTypes.string,
  itemFontSize: PropTypes.string,
  itemFontWeight: PropTypes.string,
  itemFontStyle: PropTypes.string,
  itemLineHeight: PropTypes.string,
  paddingLeft: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  listBackgroundColor: PropTypes.string,
  listBorder: PropTypes.string,
  listBorderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  showItemDividers: PropTypes.bool,
  dividerColor: PropTypes.string,
  itemBackgroundColor: PropTypes.string,
  itemHoverBackgroundColor: PropTypes.string,
  itemPadding: PropTypes.string,
  itemMarginBottom: PropTypes.string,
  itemTextDecoration: PropTypes.string,
  itemBorderRadius: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  containerAlign: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export const listComponentDefaultProps = {
  items: [
    { id: "item1", text: "Default Item 1" },
    { id: "item2", text: "Default Item 2" },
    { id: "item3", text: "Default Item 3" },
  ],
  ordered: false,
  listStyleType: "disc",
  listStylePosition: "outside",
  markerColor: "#334155",
  itemTextColor: "#333333",
  itemFontSize: "1rem",
  itemFontWeight: "400",
  itemFontStyle: "normal",
  itemLineHeight: "1.6",
  paddingLeft: "2.5rem",
  marginTop: "0px",
  marginRight: "0px",
  marginBottom: "0.5rem",
  marginLeft: "0px",
  paddingTop: "0px",
  paddingRight: "0px",
  paddingBottom: "0px",
  listBackgroundColor: "transparent",
  listBorder: "none",
  listBorderRadius: "0px",
  boxShadow: "none",
  showItemDividers: false,
  dividerColor: "#e5e7eb",
  itemBackgroundColor: "transparent",
  itemHoverBackgroundColor: "transparent",
  itemPadding: "0.25rem 0",
  itemMarginBottom: "0.25rem",
  itemTextDecoration: "none",
  itemBorderRadius: "0px",
  containerMaxWidth: "100%",
  containerAlign: "left",
  className: "",
  style: {},
};

export default ListComponent;
