import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
});

interface FileUploadButtonProps {
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (files: FileList) => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  multiple = false,
  disabled = false,
  onChange,
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const names = Array.from(files).map((file) => file.name);
    setFileNames(names);

    onChange?.(files);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button
        component="label"
        variant="outlined"
        disabled={disabled}
        startIcon={<CloudUploadIcon />}
      >
        Anexar
        <VisuallyHiddenInput
          type="file"
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
      </Button>

      {fileNames.length > 0 && (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 200,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {fileNames.join(", ")}
        </Typography>
      )}
    </Box>
  );
};

export default FileUploadButton;
