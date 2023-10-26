import { RentalInterface } from 'interfaces/rental';
import { SalesInterface } from 'interfaces/sales';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  type: string;
  brand: string;
  model: string;
  outlet_id: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  sales?: SalesInterface[];
  outlet?: OutletInterface;
  _count?: {
    rental?: number;
    sales?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  brand?: string;
  model?: string;
  outlet_id?: string;
}
