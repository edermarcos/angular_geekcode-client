export interface NotificationInterface {
  id: string;
  title: string;
  message: string;
  category: string;
  groupKey: string;
  groupMessage: string;
  icon: string;
  action: string;
  priority: string;
  timeToLive: string;
  viewed: boolean;

  userId: string;
  userName: string;
  userPicture: string;

  createdAt: string;
  updatedAt: string;
}
