import { createContext, useContext } from 'react';
import { IFormItemConfig } from '../type';

interface IFormState {
  // 表单配置
  config: IFormItemConfig[];
  onChange: (params: IFormItemConfig[]) => void;
}

const initialValue = {
  config: [{ id: '', name: '', type: '', options: { label: '' } }],
  onChange: () => {},
};

export const FormStateContext = createContext<IFormState>(initialValue);

export function useFormState() {
  const context = useContext(FormStateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormStateContext');
  }
  return context;
}
