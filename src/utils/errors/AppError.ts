interface IErrorIdentify {
  msg: string;
  statusCode?: number;
  value?: string;
  param?: string;
  location?: string;
}

class AppError {
  public readonly msg: string;
  public readonly value?: string;
  public readonly param?: string;
  public readonly location?: string;
  public readonly statusCode: number;

  constructor({ msg, statusCode, value, param, location }: IErrorIdentify) {
    this.msg = msg;
    this.statusCode = statusCode ? statusCode : 400;
    this.value = value ? value : undefined;
    this.param = param ? param : undefined;
    this.location = location ? location : undefined;
  }
}

export default AppError;
