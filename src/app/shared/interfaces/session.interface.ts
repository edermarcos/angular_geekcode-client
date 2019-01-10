export interface SessionInterface {
  id?: string,
  isActiveNow?: boolean,
  isAvailable?: boolean,
  sessionOS?: string,
  sessionIconOS?: string,
  sessionDevice?: string,
  sessionIP?: string,
  sessionBrowser?: string,
  sessionLocation?: string,
  userId?: string,
  createdAt?: string;
  latitude?: number;
  longitude?: number;
}
