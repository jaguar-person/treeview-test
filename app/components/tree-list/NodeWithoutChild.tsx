import { IconLetterT, IconCopy } from "@tabler/icons-react";
import { Paper, Group, Tooltip, Text } from "@mantine/core";

interface INodeWithoutChild {
  handleClick: (value: string) => void;
  label: string;
  value: string;
}

export default function NodeWithoutChild({
  handleClick,
  label,
  value,
}: INodeWithoutChild) {
  return (
    <Paper className="w-full">
      <Tooltip
        label={
          <Group gap={4}>
            <Paper
              withBorder
              radius={4}
              bg="#F9FAFA"
              p={2}
              className="border-[#DEDFDF] text-[#1F2020]"
            >
              <IconCopy size={12} />
            </Paper>
            <Text
              c={"#1F2020"}
              px={4}
              className="text-[10px] leading-4 border border-[#DEDFDF] rounded bg-[#F9FAFA] shadow-sm"
            >
              Create column
            </Text>
          </Group>
        }
        position="right"
        offset={-110}
        styles={{
          tooltip: { backgroundColor: "white" },
        }}
        onClick={() => handleClick(value)}
      >
        <Group gap={8}>
          <Paper
            p={4}
            bg={"#E6F2FF"}
            withBorder
            radius={4}
            className="border-[#A0BFFC]"
          >
            <IconLetterT size={8} color="#0048C0" />
          </Paper>
          <Group gap={4} className="w-4/5">
            <Text
              c={"text-[#1F2020]"}
              className="capitalize font-medium text-[10px] leading-4"
            >
              {label}
            </Text>
            <Text c={"#737474"} className="text-[10px] leading-4">
              {value.slice(0, value.length - 10)}
            </Text>
          </Group>
        </Group>
      </Tooltip>
    </Paper>
  );
}
