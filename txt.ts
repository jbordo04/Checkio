//schemas/users/userShchema.ts
export const userDeletedAtSchema = z.string().nullable()

// schemas/users/dashboardUsersListQuerySchema.ts
import {
  UserRole,
  UserStatus,
  // userDeletedAtSchema,
  userNameSchema,
  userRoleSchema,
  userStatusSchema,
} from "./userSchema"

deletedAt: userDeletedAtSchema.optional().openapi({
  param: {
    description: 'Status of deleted User',
    example: 'null',
  },
}),

//utils/queryBuilder.ts
import {
  // userDeletedAtSchema,
  userNameSchema,
  userRoleSchema,
  userStatusSchema,
} from '../schemas/users/userSchema'

if (deletedAt) {
    const parsedDeletedAt = userDeletedAtSchema.parse(deletedAt)
    conditions.push(`u.deleted_at = $${queryParams.length + 1}`)
    queryParams.push(parsedDeletedAt)
  }