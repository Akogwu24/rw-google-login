export enum IncidentType {
  ACCIDENT = 'ACCIDENT',
  EXPLOSION = 'EXPLOSION',
  KIDNAPPING = 'KIDNAPPING',
  FIRE = 'FIRE',
  // THEFT = 'THEFT',
  ASSAULT = 'ASSAULT',
  ROBBERY = 'ROBBERY',
  OTHER = 'OTHER',
}

// Generated by https://quicktype.io

export type TPreferredLanguage = {
  english: string;
  igbo: string;
  yoruba: string;
  hausa: string;
  pidgin: string;
};

export type TDisability = {
  id: number;
  name: string;
  category: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

// Generated by https://quicktype.io

export type TNewsType = {
  ID: number;
  Date: string;
  Title: string;
  ImageURL: string;
  Summary: string;
  NewsSource: string;
  SourceURL: string;
  Location: string;
  Category: string;
};
// alert customisation
// const androidSelectVideoOrImagePrompt = () => {
//   Alert.alert('Select Media', 'Would you like to take a picture or record a video?', [
//     {
//       text: 'Cancel',
//       style: 'cancel',
//     },
//     {
//       text: 'Image',
//       onPress: () => {
//         pickerOptions.mediaTypes = ImagePicker.MediaTypeOptions.Images;
//         openCameraAsync();
//       },
//     },
//     {
//       text: 'Video',
//       onPress: () => {
//         pickerOptions.mediaTypes = ImagePicker.MediaTypeOptions.Videos;
//         openCameraAsync();
//       },
//     },
//   ]);
// };
