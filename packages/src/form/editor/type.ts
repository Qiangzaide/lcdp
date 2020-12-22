export interface IFormInfo {
  id?: string;
  name?: string;
  type?: string;
  icon?: string;
  config: IFormItemConfig[];
}

export interface IFormItemConfig {
  id: string;
  name: string;
  type: string;
  options: {
    label: string;
    field?: string;
    required?: boolean;
    placeholder?: string;
    [key: string]: any;
  };
  children?: IFormItemConfig[];
}

export interface FieldComponent {
  id?: number;
  name: string; // 组件名称
  type: string; // 组件类型
  fieldType: string; // 值类型
  icon: React.ReactNode; // 组件图标
  Config: any; // 组件配置面板
  View: any; // 组件实例
  defaultOption?: any;
}
