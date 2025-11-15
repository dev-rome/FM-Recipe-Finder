import styles from "./SectionDivider.module.css";

interface SectionDividerProps {
  marginTop?: string;
  marginBottom?: string;
  className?: string;
}

const SectionDivider = ({
  marginTop,
  marginBottom,
  className = "",
}: SectionDividerProps) => {
  const dividerClasses = [styles.sectionDivider, className]
    .filter(Boolean)
    .join(" ");

  const customStyles: React.CSSProperties = {};

  if (marginTop) customStyles.marginTop = marginTop;

  if (marginBottom) customStyles.marginBottom = marginBottom;

  return (
    <hr
      className={dividerClasses}
      style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
    />
  );
};

export default SectionDivider;
