interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Outlet Manager', 'Sales Associate', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read personal user information',
    'Manage personal rental records',
    'Manage personal sales records',
    'Read tool information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage outlet data', 'Manage tool data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/674c9841-cc7c-4842-87fa-14c0558c8caa',
};
