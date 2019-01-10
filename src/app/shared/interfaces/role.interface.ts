export interface RoleInterface {
  id?: string;
  roleName?: string;
  fixed?: boolean;
  // Users
  postCreateUser?: boolean;
  getIndexUser?: boolean;
  getShowUser?: boolean;
  putUpdateUser?: boolean;
  putUpdatePasswordUser?: boolean;
  deleteDestroyUser?: boolean;
  // (User) Admin
  postCreateAdminUser?: boolean;
  getIndexByRoleUser?: boolean;
  putUpdateRoleUser?: boolean;
  // Roles
  postCreateRole?: boolean;
  getIndexRole?: boolean;
  getShowRole?: boolean;
  putUpdateRole?: boolean;
  deleteDestroyRole?: boolean;
  // Notifications
  postCreateNotification?: boolean;
  // No Record Messages
  postCreateNRM?: boolean;
  getIndexNRM?: boolean;
  getShowByMetadataNRM?: boolean;
  putUpdateNRM?: boolean;
  deleteDestroyNRM?: boolean;
  // Grid Metadata
  postCreateGridMetadata?: boolean;
  getIndexGridMetadata?: boolean;
  getShowGridMetadata?: boolean;
  putUpdateGridMetadata?: boolean;
  deleteDestroyGridMetadata?: boolean;
  // Form Metadata
  postCreateFormMetadata?: boolean;
  getIndexFormMetadata?: boolean;
  getShowFormMetadata?: boolean;
  putUpdateFormMetadata?: boolean;
  deleteDestroyFormMetadata?: boolean;
  // Events
  postCreateEvent?: boolean;
  getIndexEvent?: boolean;
  getIndexByDateEvent?: boolean;
  getShowEvent?: boolean;
  putUpdateEvent?: boolean;
  deleteDestroyEvent?: boolean;
  // Enum Lookup
  postCreateEnumlookup?: boolean;
  getShowEnumlookup?: boolean;
  putUpdateEnumlookup?: boolean;
  putUpdateByTypeEnumlookup?: boolean;
  deleteDestroyEnumlookup?: boolean;
  deleteDestroyByTypeEnumlookup?: boolean;
  // Endpoints
  postCreateEndpoint?: boolean;
  getIndexEndpoint?: boolean;
  getShowEndpoint?: boolean;
  putUpdateEndpoint?: boolean;
  deleteDestroyEndpoint?: boolean;
  deleteDestroyByMetadataEndpoint?: boolean;
  // Configurations
  getIndexConfiguration?: boolean;
  deleteDestroyConfiguration?: boolean;
  // Categories
  getIndexCategory?: boolean;
  deleteDestroyCategory?: boolean;
  // Addresses
  getIndexAddress?: boolean;
  deleteDestroyAddress?: boolean;
  // Activities
  putUpdateActivity?: boolean;
  deleteDestroyActivity?: boolean;
  // Auth
  accessMtechSystemsIntranet?: boolean;

  createdAt?: string;
  updatedAt?: string;
}
