class VikkiDataSyncGuard {
  private static instance: VikkiDataSyncGuard;
  private data: any = {};

  private constructor() {}
  static getInstance(): VikkiDataSyncGuard {
    if (!VikkiDataSyncGuard.instance) {
      VikkiDataSyncGuard.instance = new VikkiDataSyncGuard();
    }
    return VikkiDataSyncGuard.instance;
  }

  private getDataWithAppName = (appName: string) => {
    // TODO - Implement get data with app's permission
    switch (appName) {
      case 'VikkiCare':
        return this.data;
      default:
        break;
    }
  };

  // TODO - change to private
  public setAppData = (data: any) => {
    // TODO - Implement set sync data logic
    if (this.data !== data) {
      this.data = data;
    }
  };

  public getData = (appName: string) => {
    return this.getDataWithAppName(appName);
  };
}

export default VikkiDataSyncGuard;
