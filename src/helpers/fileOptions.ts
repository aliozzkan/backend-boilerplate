import multer from "multer";

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export const fileUploadOptions = (folderName: string = "") => ({
  storage: multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, `./uploads/${folderName ? folderName + "/" : ""}`);
    },
    filename: (req: any, file: any, cb: any) => {
      cb(null, new Date().toISOString() + file.originalname);
    },
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(new Error("File must be valid!"), false);
    }
  },
  limits: {
    fieldNameSize: 255,
    fileSize: 1024 * 1024 * 5,
  },
});
