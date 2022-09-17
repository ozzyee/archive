export type TSkillsData = {
   id: string;
   title: string;
   mainText: string;
   skills: TSkill[];
};

export type TSkill = {
   id: number;
   alt: string;
   src: string;
   text: string;
};

export type TSkillsDataObject = {
   status: string;
   message: string;
   _data: TSkillsData;
};
