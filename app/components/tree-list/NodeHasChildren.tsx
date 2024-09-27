import { IconChevronDown } from "@tabler/icons-react";
import { Group, Text } from "@mantine/core";
import { roboto_mono } from "@/app/fonts";

interface INodeHasChildren {
  expanded: boolean;
  label: string;
  length: number | undefined;
}

export default function NodeHasChildren({
  expanded,
  label,
  length,
}: INodeHasChildren) {
  return (
    <Group gap={4}>
      <IconChevronDown
        size={16}
        className={`${
          expanded ? "-rotate-0" : "-rotate-90"
        } transition-transform duration-300 hover:bg-[#F4F5F5] rounded`}
      />
      <Group align="baseline" gap={4}>
        <Text
          c={"#1F2020"}
          className="capitalize font-medium text-[10px] leading-4"
        >
          {label}
        </Text>
        <Text
          c={"#737474"}
          className={roboto_mono.className + " text-[10px] leading-4"}
        >
          {" [" + length + " items]"}
        </Text>
      </Group>
    </Group>
  );
}
