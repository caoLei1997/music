export interface DataSourceCommon {
  name: string;
}

export interface DataSource {
  name: string;
  ar: DataSourceCommon[];
  al: DataSourceCommon;
}
