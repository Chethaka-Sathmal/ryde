import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-primary-500";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

export default function CustomButton({
  title,
  onPress,
  className,
  IconLeft,
  IconRight,
  bgVariant = "primary",
  textVariant = "default",
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex items-center justify-center ${getBgVariantStyle(
        bgVariant
      )} w-[90vw] rounded-full py-[1vh] ${className}`}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`${getTextVariantStyle(
          textVariant
        )} font-jakarta-semibold text-2xl`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}
