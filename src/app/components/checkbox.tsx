const Checkbox = ({
  label,
  isChecked,
  onCheckboxChange,
}: {
  label: string;
  isChecked: boolean;
  onCheckboxChange: (label: string, checked: boolean) => void;
}) => {
  return (
    <label className="flex items-center cursor-pointer my-4">
      <span className=" border border-gray-300 p-1">
        <input
          type="checkbox"
          checked={isChecked}
          className="hidden"
          onChange={(e) => onCheckboxChange(label, e.target.checked)}
        />
        <span className="block w-4 h-4 bg-white border-2  border-blue-500 checkmark"></span>
      </span>
      <span className="ml-2.5 text-blue-500">{label}</span>
    </label>
  );
};

export default Checkbox;
