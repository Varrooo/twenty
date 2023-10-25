import { TenantMigrationTableAction } from 'src/metadata/tenant-migration/tenant-migration.entity';

export const addWorkspaceMemberTable: TenantMigrationTableAction[] = [
  {
    name: 'workspace_member',
    action: 'create',
  },
  {
    name: 'workspace_member',
    action: 'alter',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        action: 'create',
      },
      {
        name: 'allowImpersonation',
        type: 'boolean',
        action: 'create',
      },
      {
        name: 'createdAt',
        action: 'create',
        type: 'timestamp',
      },
      {
        name: 'updatedAt',
        action: 'create',
        type: 'timestamp',
      },
    ],
  },
];