
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Groups
 * 
 */
export type Groups = $Result.DefaultSelection<Prisma.$GroupsPayload>
/**
 * Model Leads
 * 
 */
export type Leads = $Result.DefaultSelection<Prisma.$LeadsPayload>
/**
 * Model Campaigns
 * 
 */
export type Campaigns = $Result.DefaultSelection<Prisma.$CampaignsPayload>
/**
 * Model LeadsCampaigns
 * 
 */
export type LeadsCampaigns = $Result.DefaultSelection<Prisma.$LeadsCampaignsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeadStatus: {
  New: 'New',
  Contacted: 'Contacted',
  Qualified: 'Qualified',
  Converted: 'Converted',
  Unresponsive: 'Unresponsive',
  Disqualified: 'Disqualified',
  Archived: 'Archived'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const LeadsCampaignsStatus: {
  New: 'New',
  Engaged: 'Engaged',
  Folloup_Scheduled: 'Folloup_Scheduled',
  Contacted: 'Contacted',
  Converted: 'Converted',
  Unresponsive: 'Unresponsive',
  Disqualified: 'Disqualified',
  Re_Engaged: 'Re_Engaged',
  Opted_Out: 'Opted_Out'
};

export type LeadsCampaignsStatus = (typeof LeadsCampaignsStatus)[keyof typeof LeadsCampaignsStatus]

}

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type LeadsCampaignsStatus = $Enums.LeadsCampaignsStatus

export const LeadsCampaignsStatus: typeof $Enums.LeadsCampaignsStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Groups
 * const groups = await prisma.groups.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Groups
   * const groups = await prisma.groups.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.groups`: Exposes CRUD operations for the **Groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.GroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **Leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.LeadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaigns`: Exposes CRUD operations for the **Campaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaigns.findMany()
    * ```
    */
  get campaigns(): Prisma.CampaignsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadsCampaigns`: Exposes CRUD operations for the **LeadsCampaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadsCampaigns
    * const leadsCampaigns = await prisma.leadsCampaigns.findMany()
    * ```
    */
  get leadsCampaigns(): Prisma.LeadsCampaignsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Groups: 'Groups',
    Leads: 'Leads',
    Campaigns: 'Campaigns',
    LeadsCampaigns: 'LeadsCampaigns'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "groups" | "leads" | "campaigns" | "leadsCampaigns"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Groups: {
        payload: Prisma.$GroupsPayload<ExtArgs>
        fields: Prisma.GroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          findFirst: {
            args: Prisma.GroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          findMany: {
            args: Prisma.GroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>[]
          }
          create: {
            args: Prisma.GroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          createMany: {
            args: Prisma.GroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>[]
          }
          delete: {
            args: Prisma.GroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          update: {
            args: Prisma.GroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          deleteMany: {
            args: Prisma.GroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>[]
          }
          upsert: {
            args: Prisma.GroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.GroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      Leads: {
        payload: Prisma.$LeadsPayload<ExtArgs>
        fields: Prisma.LeadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          findFirst: {
            args: Prisma.LeadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          findMany: {
            args: Prisma.LeadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          create: {
            args: Prisma.LeadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          createMany: {
            args: Prisma.LeadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          delete: {
            args: Prisma.LeadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          update: {
            args: Prisma.LeadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          deleteMany: {
            args: Prisma.LeadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          upsert: {
            args: Prisma.LeadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.LeadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
      Campaigns: {
        payload: Prisma.$CampaignsPayload<ExtArgs>
        fields: Prisma.CampaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          findFirst: {
            args: Prisma.CampaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          findMany: {
            args: Prisma.CampaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>[]
          }
          create: {
            args: Prisma.CampaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          createMany: {
            args: Prisma.CampaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>[]
          }
          delete: {
            args: Prisma.CampaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          update: {
            args: Prisma.CampaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          deleteMany: {
            args: Prisma.CampaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>[]
          }
          upsert: {
            args: Prisma.CampaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignsPayload>
          }
          aggregate: {
            args: Prisma.CampaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaigns>
          }
          groupBy: {
            args: Prisma.CampaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignsCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignsCountAggregateOutputType> | number
          }
        }
      }
      LeadsCampaigns: {
        payload: Prisma.$LeadsCampaignsPayload<ExtArgs>
        fields: Prisma.LeadsCampaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadsCampaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadsCampaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>
          }
          findFirst: {
            args: Prisma.LeadsCampaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadsCampaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>
          }
          findMany: {
            args: Prisma.LeadsCampaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>[]
          }
          create: {
            args: Prisma.LeadsCampaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>
          }
          createMany: {
            args: Prisma.LeadsCampaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadsCampaignsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>[]
          }
          delete: {
            args: Prisma.LeadsCampaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>
          }
          update: {
            args: Prisma.LeadsCampaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>
          }
          deleteMany: {
            args: Prisma.LeadsCampaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadsCampaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadsCampaignsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>[]
          }
          upsert: {
            args: Prisma.LeadsCampaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsCampaignsPayload>
          }
          aggregate: {
            args: Prisma.LeadsCampaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadsCampaigns>
          }
          groupBy: {
            args: Prisma.LeadsCampaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsCampaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadsCampaignsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCampaignsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    groups?: GroupsOmit
    leads?: LeadsOmit
    campaigns?: CampaignsOmit
    leadsCampaigns?: LeadsCampaignsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    leads: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | GroupsCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsWhereInput
  }


  /**
   * Count Type LeadsCountOutputType
   */

  export type LeadsCountOutputType = {
    groups: number
    campaigns: number
  }

  export type LeadsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | LeadsCountOutputTypeCountGroupsArgs
    campaigns?: boolean | LeadsCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCountOutputType
     */
    select?: LeadsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsWhereInput
  }

  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsCampaignsWhereInput
  }


  /**
   * Count Type CampaignsCountOutputType
   */

  export type CampaignsCountOutputType = {
    leads: number
  }

  export type CampaignsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | CampaignsCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsCountOutputType
     */
    select?: CampaignsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsCampaignsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupsSumAggregateOutputType = {
    id: number | null
  }

  export type GroupsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type GroupsAvgAggregateInputType = {
    id?: true
  }

  export type GroupsSumAggregateInputType = {
    id?: true
  }

  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to aggregate.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type GroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsWhereInput
    orderBy?: GroupsOrderByWithAggregationInput | GroupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: GroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _avg?: GroupsAvgAggregateInputType
    _sum?: GroupsSumAggregateInputType
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends GroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type GroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    leads?: boolean | Groups$leadsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type GroupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["groups"]>

  export type GroupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["groups"]>

  export type GroupsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type GroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["groups"]>
  export type GroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | Groups$leadsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groups"
    objects: {
      leads: Prisma.$LeadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type GroupsGetPayload<S extends boolean | null | undefined | GroupsDefaultArgs> = $Result.GetResult<Prisma.$GroupsPayload, S>

  type GroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface GroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groups'], meta: { name: 'Groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {GroupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupsFindUniqueArgs>(args: SelectSubset<T, GroupsFindUniqueArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupsFindFirstArgs>(args?: SelectSubset<T, GroupsFindFirstArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupsFindManyArgs>(args?: SelectSubset<T, GroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {GroupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends GroupsCreateArgs>(args: SelectSubset<T, GroupsCreateArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupsCreateManyArgs>(args?: SelectSubset<T, GroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupsCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groups.
     * @param {GroupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends GroupsDeleteArgs>(args: SelectSubset<T, GroupsDeleteArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {GroupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupsUpdateArgs>(args: SelectSubset<T, GroupsUpdateArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupsDeleteManyArgs>(args?: SelectSubset<T, GroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupsUpdateManyArgs>(args: SelectSubset<T, GroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupsUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupsUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groups.
     * @param {GroupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends GroupsUpsertArgs>(args: SelectSubset<T, GroupsUpsertArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupsCountArgs>(
      args?: Subset<T, GroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupsGroupByArgs['orderBy'] }
        : { orderBy?: GroupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groups model
   */
  readonly fields: GroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends Groups$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Groups$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Groups model
   */
  interface GroupsFieldRefs {
    readonly id: FieldRef<"Groups", 'Int'>
    readonly name: FieldRef<"Groups", 'String'>
    readonly description: FieldRef<"Groups", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Groups findUnique
   */
  export type GroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups findUniqueOrThrow
   */
  export type GroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups findFirst
   */
  export type GroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Groups findFirstOrThrow
   */
  export type GroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Groups findMany
   */
  export type GroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Groups create
   */
  export type GroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a Groups.
     */
    data: XOR<GroupsCreateInput, GroupsUncheckedCreateInput>
  }

  /**
   * Groups createMany
   */
  export type GroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupsCreateManyInput | GroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groups createManyAndReturn
   */
  export type GroupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupsCreateManyInput | GroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groups update
   */
  export type GroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a Groups.
     */
    data: XOR<GroupsUpdateInput, GroupsUncheckedUpdateInput>
    /**
     * Choose, which Groups to update.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups updateMany
   */
  export type GroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupsUpdateManyMutationInput, GroupsUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupsWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Groups updateManyAndReturn
   */
  export type GroupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupsUpdateManyMutationInput, GroupsUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupsWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Groups upsert
   */
  export type GroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the Groups to update in case it exists.
     */
    where: GroupsWhereUniqueInput
    /**
     * In case the Groups found by the `where` argument doesn't exist, create a new Groups with this data.
     */
    create: XOR<GroupsCreateInput, GroupsUncheckedCreateInput>
    /**
     * In case the Groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupsUpdateInput, GroupsUncheckedUpdateInput>
  }

  /**
   * Groups delete
   */
  export type GroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter which Groups to delete.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups deleteMany
   */
  export type GroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupsWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Groups.leads
   */
  export type Groups$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    where?: LeadsWhereInput
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    cursor?: LeadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Groups without action
   */
  export type GroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
  }


  /**
   * Model Leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    id: number | null
  }

  export type LeadsSumAggregateOutputType = {
    id: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.LeadStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.LeadStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    id?: true
  }

  export type LeadsSumAggregateInputType = {
    id?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to aggregate.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type LeadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsWhereInput
    orderBy?: LeadsOrderByWithAggregationInput | LeadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: LeadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    status: $Enums.LeadStatus
    createdAt: Date
    updatedAt: Date
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends LeadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type LeadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | Leads$groupsArgs<ExtArgs>
    campaigns?: boolean | Leads$campaignsArgs<ExtArgs>
    _count?: boolean | LeadsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["leads"]>
  export type LeadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | Leads$groupsArgs<ExtArgs>
    campaigns?: boolean | Leads$campaignsArgs<ExtArgs>
    _count?: boolean | LeadsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LeadsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LeadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leads"
    objects: {
      groups: Prisma.$GroupsPayload<ExtArgs>[]
      campaigns: Prisma.$LeadsCampaignsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      status: $Enums.LeadStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type LeadsGetPayload<S extends boolean | null | undefined | LeadsDefaultArgs> = $Result.GetResult<Prisma.$LeadsPayload, S>

  type LeadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface LeadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leads'], meta: { name: 'Leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {LeadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadsFindUniqueArgs>(args: SelectSubset<T, LeadsFindUniqueArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadsFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadsFindFirstArgs>(args?: SelectSubset<T, LeadsFindFirstArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadsFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadsFindManyArgs>(args?: SelectSubset<T, LeadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {LeadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends LeadsCreateArgs>(args: SelectSubset<T, LeadsCreateArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadsCreateManyArgs>(args?: SelectSubset<T, LeadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadsCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {LeadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends LeadsDeleteArgs>(args: SelectSubset<T, LeadsDeleteArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {LeadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadsUpdateArgs>(args: SelectSubset<T, LeadsUpdateArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadsDeleteManyArgs>(args?: SelectSubset<T, LeadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadsUpdateManyArgs>(args: SelectSubset<T, LeadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadsUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {LeadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends LeadsUpsertArgs>(args: SelectSubset<T, LeadsUpsertArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadsCountArgs>(
      args?: Subset<T, LeadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadsGroupByArgs['orderBy'] }
        : { orderBy?: LeadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leads model
   */
  readonly fields: LeadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends Leads$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Leads$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Leads$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Leads$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leads model
   */
  interface LeadsFieldRefs {
    readonly id: FieldRef<"Leads", 'Int'>
    readonly name: FieldRef<"Leads", 'String'>
    readonly email: FieldRef<"Leads", 'String'>
    readonly phone: FieldRef<"Leads", 'String'>
    readonly status: FieldRef<"Leads", 'LeadStatus'>
    readonly createdAt: FieldRef<"Leads", 'DateTime'>
    readonly updatedAt: FieldRef<"Leads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leads findUnique
   */
  export type LeadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads findUniqueOrThrow
   */
  export type LeadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads findFirst
   */
  export type LeadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads findFirstOrThrow
   */
  export type LeadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads findMany
   */
  export type LeadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads create
   */
  export type LeadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * The data needed to create a Leads.
     */
    data: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>
  }

  /**
   * Leads createMany
   */
  export type LeadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leads createManyAndReturn
   */
  export type LeadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leads update
   */
  export type LeadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * The data needed to update a Leads.
     */
    data: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>
    /**
     * Choose, which Leads to update.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads updateMany
   */
  export type LeadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Leads updateManyAndReturn
   */
  export type LeadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Leads upsert
   */
  export type LeadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * The filter to search for the Leads to update in case it exists.
     */
    where: LeadsWhereUniqueInput
    /**
     * In case the Leads found by the `where` argument doesn't exist, create a new Leads with this data.
     */
    create: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>
    /**
     * In case the Leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>
  }

  /**
   * Leads delete
   */
  export type LeadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter which Leads to delete.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads deleteMany
   */
  export type LeadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Leads.groups
   */
  export type Leads$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groups
     */
    omit?: GroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    where?: GroupsWhereInput
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    cursor?: GroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Leads.campaigns
   */
  export type Leads$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    where?: LeadsCampaignsWhereInput
    orderBy?: LeadsCampaignsOrderByWithRelationInput | LeadsCampaignsOrderByWithRelationInput[]
    cursor?: LeadsCampaignsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsCampaignsScalarFieldEnum | LeadsCampaignsScalarFieldEnum[]
  }

  /**
   * Leads without action
   */
  export type LeadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
  }


  /**
   * Model Campaigns
   */

  export type AggregateCampaigns = {
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  export type CampaignsAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaignsSumAggregateOutputType = {
    id: number | null
  }

  export type CampaignsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type CampaignsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type CampaignsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    _all: number
  }


  export type CampaignsAvgAggregateInputType = {
    id?: true
  }

  export type CampaignsSumAggregateInputType = {
    id?: true
  }

  export type CampaignsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
  }

  export type CampaignsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
  }

  export type CampaignsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type CampaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to aggregate.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignsMaxAggregateInputType
  }

  export type GetCampaignsAggregateType<T extends CampaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaigns[P]>
      : GetScalarType<T[P], AggregateCampaigns[P]>
  }




  export type CampaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignsWhereInput
    orderBy?: CampaignsOrderByWithAggregationInput | CampaignsOrderByWithAggregationInput[]
    by: CampaignsScalarFieldEnum[] | CampaignsScalarFieldEnum
    having?: CampaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignsCountAggregateInputType | true
    _avg?: CampaignsAvgAggregateInputType
    _sum?: CampaignsSumAggregateInputType
    _min?: CampaignsMinAggregateInputType
    _max?: CampaignsMaxAggregateInputType
  }

  export type CampaignsGroupByOutputType = {
    id: number
    name: string
    description: string
    startDate: Date
    endDate: Date | null
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  type GetCampaignsGroupByPayload<T extends CampaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
        }
      >
    >


  export type CampaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    leads?: boolean | Campaigns$leadsArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigns"]>

  export type CampaignsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type CampaignsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type CampaignsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type CampaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate", ExtArgs["result"]["campaigns"]>
  export type CampaignsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | Campaigns$leadsArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaigns"
    objects: {
      leads: Prisma.$LeadsCampaignsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      startDate: Date
      endDate: Date | null
    }, ExtArgs["result"]["campaigns"]>
    composites: {}
  }

  type CampaignsGetPayload<S extends boolean | null | undefined | CampaignsDefaultArgs> = $Result.GetResult<Prisma.$CampaignsPayload, S>

  type CampaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignsCountAggregateInputType | true
    }

  export interface CampaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaigns'], meta: { name: 'Campaigns' } }
    /**
     * Find zero or one Campaigns that matches the filter.
     * @param {CampaignsFindUniqueArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignsFindUniqueArgs>(args: SelectSubset<T, CampaignsFindUniqueArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignsFindUniqueOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsFindFirstArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignsFindFirstArgs>(args?: SelectSubset<T, CampaignsFindFirstArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsFindFirstOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaigns.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaigns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignsFindManyArgs>(args?: SelectSubset<T, CampaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaigns.
     * @param {CampaignsCreateArgs} args - Arguments to create a Campaigns.
     * @example
     * // Create one Campaigns
     * const Campaigns = await prisma.campaigns.create({
     *   data: {
     *     // ... data to create a Campaigns
     *   }
     * })
     * 
     */
    create<T extends CampaignsCreateArgs>(args: SelectSubset<T, CampaignsCreateArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignsCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignsCreateManyArgs>(args?: SelectSubset<T, CampaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignsCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignsCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaigns.
     * @param {CampaignsDeleteArgs} args - Arguments to delete one Campaigns.
     * @example
     * // Delete one Campaigns
     * const Campaigns = await prisma.campaigns.delete({
     *   where: {
     *     // ... filter to delete one Campaigns
     *   }
     * })
     * 
     */
    delete<T extends CampaignsDeleteArgs>(args: SelectSubset<T, CampaignsDeleteArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaigns.
     * @param {CampaignsUpdateArgs} args - Arguments to update one Campaigns.
     * @example
     * // Update one Campaigns
     * const campaigns = await prisma.campaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignsUpdateArgs>(args: SelectSubset<T, CampaignsUpdateArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignsDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignsDeleteManyArgs>(args?: SelectSubset<T, CampaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignsUpdateManyArgs>(args: SelectSubset<T, CampaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignsUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignsUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaigns.
     * @param {CampaignsUpsertArgs} args - Arguments to update or create a Campaigns.
     * @example
     * // Update or create a Campaigns
     * const campaigns = await prisma.campaigns.upsert({
     *   create: {
     *     // ... data to create a Campaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaigns we want to update
     *   }
     * })
     */
    upsert<T extends CampaignsUpsertArgs>(args: SelectSubset<T, CampaignsUpsertArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaigns.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignsCountArgs>(
      args?: Subset<T, CampaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignsAggregateArgs>(args: Subset<T, CampaignsAggregateArgs>): Prisma.PrismaPromise<GetCampaignsAggregateType<T>>

    /**
     * Group by Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignsGroupByArgs['orderBy'] }
        : { orderBy?: CampaignsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaigns model
   */
  readonly fields: CampaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends Campaigns$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Campaigns$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaigns model
   */
  interface CampaignsFieldRefs {
    readonly id: FieldRef<"Campaigns", 'Int'>
    readonly name: FieldRef<"Campaigns", 'String'>
    readonly description: FieldRef<"Campaigns", 'String'>
    readonly startDate: FieldRef<"Campaigns", 'DateTime'>
    readonly endDate: FieldRef<"Campaigns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaigns findUnique
   */
  export type CampaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where: CampaignsWhereUniqueInput
  }

  /**
   * Campaigns findUniqueOrThrow
   */
  export type CampaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where: CampaignsWhereUniqueInput
  }

  /**
   * Campaigns findFirst
   */
  export type CampaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * Campaigns findFirstOrThrow
   */
  export type CampaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * Campaigns findMany
   */
  export type CampaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignsOrderByWithRelationInput | CampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * Campaigns create
   */
  export type CampaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaigns.
     */
    data: XOR<CampaignsCreateInput, CampaignsUncheckedCreateInput>
  }

  /**
   * Campaigns createMany
   */
  export type CampaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignsCreateManyInput | CampaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaigns createManyAndReturn
   */
  export type CampaignsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignsCreateManyInput | CampaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaigns update
   */
  export type CampaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaigns.
     */
    data: XOR<CampaignsUpdateInput, CampaignsUncheckedUpdateInput>
    /**
     * Choose, which Campaigns to update.
     */
    where: CampaignsWhereUniqueInput
  }

  /**
   * Campaigns updateMany
   */
  export type CampaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignsUpdateManyMutationInput, CampaignsUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignsWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaigns updateManyAndReturn
   */
  export type CampaignsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignsUpdateManyMutationInput, CampaignsUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignsWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaigns upsert
   */
  export type CampaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaigns to update in case it exists.
     */
    where: CampaignsWhereUniqueInput
    /**
     * In case the Campaigns found by the `where` argument doesn't exist, create a new Campaigns with this data.
     */
    create: XOR<CampaignsCreateInput, CampaignsUncheckedCreateInput>
    /**
     * In case the Campaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignsUpdateInput, CampaignsUncheckedUpdateInput>
  }

  /**
   * Campaigns delete
   */
  export type CampaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
    /**
     * Filter which Campaigns to delete.
     */
    where: CampaignsWhereUniqueInput
  }

  /**
   * Campaigns deleteMany
   */
  export type CampaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignsWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaigns.leads
   */
  export type Campaigns$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    where?: LeadsCampaignsWhereInput
    orderBy?: LeadsCampaignsOrderByWithRelationInput | LeadsCampaignsOrderByWithRelationInput[]
    cursor?: LeadsCampaignsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsCampaignsScalarFieldEnum | LeadsCampaignsScalarFieldEnum[]
  }

  /**
   * Campaigns without action
   */
  export type CampaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaigns
     */
    select?: CampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaigns
     */
    omit?: CampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignsInclude<ExtArgs> | null
  }


  /**
   * Model LeadsCampaigns
   */

  export type AggregateLeadsCampaigns = {
    _count: LeadsCampaignsCountAggregateOutputType | null
    _avg: LeadsCampaignsAvgAggregateOutputType | null
    _sum: LeadsCampaignsSumAggregateOutputType | null
    _min: LeadsCampaignsMinAggregateOutputType | null
    _max: LeadsCampaignsMaxAggregateOutputType | null
  }

  export type LeadsCampaignsAvgAggregateOutputType = {
    leadId: number | null
    campaignId: number | null
  }

  export type LeadsCampaignsSumAggregateOutputType = {
    leadId: number | null
    campaignId: number | null
  }

  export type LeadsCampaignsMinAggregateOutputType = {
    leadId: number | null
    campaignId: number | null
    status: $Enums.LeadsCampaignsStatus | null
  }

  export type LeadsCampaignsMaxAggregateOutputType = {
    leadId: number | null
    campaignId: number | null
    status: $Enums.LeadsCampaignsStatus | null
  }

  export type LeadsCampaignsCountAggregateOutputType = {
    leadId: number
    campaignId: number
    status: number
    _all: number
  }


  export type LeadsCampaignsAvgAggregateInputType = {
    leadId?: true
    campaignId?: true
  }

  export type LeadsCampaignsSumAggregateInputType = {
    leadId?: true
    campaignId?: true
  }

  export type LeadsCampaignsMinAggregateInputType = {
    leadId?: true
    campaignId?: true
    status?: true
  }

  export type LeadsCampaignsMaxAggregateInputType = {
    leadId?: true
    campaignId?: true
    status?: true
  }

  export type LeadsCampaignsCountAggregateInputType = {
    leadId?: true
    campaignId?: true
    status?: true
    _all?: true
  }

  export type LeadsCampaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadsCampaigns to aggregate.
     */
    where?: LeadsCampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadsCampaigns to fetch.
     */
    orderBy?: LeadsCampaignsOrderByWithRelationInput | LeadsCampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadsCampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadsCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadsCampaigns
    **/
    _count?: true | LeadsCampaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsCampaignsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsCampaignsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsCampaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsCampaignsMaxAggregateInputType
  }

  export type GetLeadsCampaignsAggregateType<T extends LeadsCampaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadsCampaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadsCampaigns[P]>
      : GetScalarType<T[P], AggregateLeadsCampaigns[P]>
  }




  export type LeadsCampaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsCampaignsWhereInput
    orderBy?: LeadsCampaignsOrderByWithAggregationInput | LeadsCampaignsOrderByWithAggregationInput[]
    by: LeadsCampaignsScalarFieldEnum[] | LeadsCampaignsScalarFieldEnum
    having?: LeadsCampaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCampaignsCountAggregateInputType | true
    _avg?: LeadsCampaignsAvgAggregateInputType
    _sum?: LeadsCampaignsSumAggregateInputType
    _min?: LeadsCampaignsMinAggregateInputType
    _max?: LeadsCampaignsMaxAggregateInputType
  }

  export type LeadsCampaignsGroupByOutputType = {
    leadId: number
    campaignId: number
    status: $Enums.LeadsCampaignsStatus
    _count: LeadsCampaignsCountAggregateOutputType | null
    _avg: LeadsCampaignsAvgAggregateOutputType | null
    _sum: LeadsCampaignsSumAggregateOutputType | null
    _min: LeadsCampaignsMinAggregateOutputType | null
    _max: LeadsCampaignsMaxAggregateOutputType | null
  }

  type GetLeadsCampaignsGroupByPayload<T extends LeadsCampaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsCampaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsCampaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsCampaignsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsCampaignsGroupByOutputType[P]>
        }
      >
    >


  export type LeadsCampaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leadId?: boolean
    campaignId?: boolean
    status?: boolean
    campaings?: boolean | CampaignsDefaultArgs<ExtArgs>
    leads?: boolean | LeadsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadsCampaigns"]>

  export type LeadsCampaignsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leadId?: boolean
    campaignId?: boolean
    status?: boolean
    campaings?: boolean | CampaignsDefaultArgs<ExtArgs>
    leads?: boolean | LeadsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadsCampaigns"]>

  export type LeadsCampaignsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leadId?: boolean
    campaignId?: boolean
    status?: boolean
    campaings?: boolean | CampaignsDefaultArgs<ExtArgs>
    leads?: boolean | LeadsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadsCampaigns"]>

  export type LeadsCampaignsSelectScalar = {
    leadId?: boolean
    campaignId?: boolean
    status?: boolean
  }

  export type LeadsCampaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"leadId" | "campaignId" | "status", ExtArgs["result"]["leadsCampaigns"]>
  export type LeadsCampaignsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaings?: boolean | CampaignsDefaultArgs<ExtArgs>
    leads?: boolean | LeadsDefaultArgs<ExtArgs>
  }
  export type LeadsCampaignsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaings?: boolean | CampaignsDefaultArgs<ExtArgs>
    leads?: boolean | LeadsDefaultArgs<ExtArgs>
  }
  export type LeadsCampaignsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaings?: boolean | CampaignsDefaultArgs<ExtArgs>
    leads?: boolean | LeadsDefaultArgs<ExtArgs>
  }

  export type $LeadsCampaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadsCampaigns"
    objects: {
      campaings: Prisma.$CampaignsPayload<ExtArgs>
      leads: Prisma.$LeadsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      leadId: number
      campaignId: number
      status: $Enums.LeadsCampaignsStatus
    }, ExtArgs["result"]["leadsCampaigns"]>
    composites: {}
  }

  type LeadsCampaignsGetPayload<S extends boolean | null | undefined | LeadsCampaignsDefaultArgs> = $Result.GetResult<Prisma.$LeadsCampaignsPayload, S>

  type LeadsCampaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadsCampaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCampaignsCountAggregateInputType | true
    }

  export interface LeadsCampaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadsCampaigns'], meta: { name: 'LeadsCampaigns' } }
    /**
     * Find zero or one LeadsCampaigns that matches the filter.
     * @param {LeadsCampaignsFindUniqueArgs} args - Arguments to find a LeadsCampaigns
     * @example
     * // Get one LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadsCampaignsFindUniqueArgs>(args: SelectSubset<T, LeadsCampaignsFindUniqueArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadsCampaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadsCampaignsFindUniqueOrThrowArgs} args - Arguments to find a LeadsCampaigns
     * @example
     * // Get one LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadsCampaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadsCampaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadsCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsFindFirstArgs} args - Arguments to find a LeadsCampaigns
     * @example
     * // Get one LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadsCampaignsFindFirstArgs>(args?: SelectSubset<T, LeadsCampaignsFindFirstArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadsCampaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsFindFirstOrThrowArgs} args - Arguments to find a LeadsCampaigns
     * @example
     * // Get one LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadsCampaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadsCampaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadsCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.findMany()
     * 
     * // Get first 10 LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.findMany({ take: 10 })
     * 
     * // Only select the `leadId`
     * const leadsCampaignsWithLeadIdOnly = await prisma.leadsCampaigns.findMany({ select: { leadId: true } })
     * 
     */
    findMany<T extends LeadsCampaignsFindManyArgs>(args?: SelectSubset<T, LeadsCampaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadsCampaigns.
     * @param {LeadsCampaignsCreateArgs} args - Arguments to create a LeadsCampaigns.
     * @example
     * // Create one LeadsCampaigns
     * const LeadsCampaigns = await prisma.leadsCampaigns.create({
     *   data: {
     *     // ... data to create a LeadsCampaigns
     *   }
     * })
     * 
     */
    create<T extends LeadsCampaignsCreateArgs>(args: SelectSubset<T, LeadsCampaignsCreateArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadsCampaigns.
     * @param {LeadsCampaignsCreateManyArgs} args - Arguments to create many LeadsCampaigns.
     * @example
     * // Create many LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadsCampaignsCreateManyArgs>(args?: SelectSubset<T, LeadsCampaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadsCampaigns and returns the data saved in the database.
     * @param {LeadsCampaignsCreateManyAndReturnArgs} args - Arguments to create many LeadsCampaigns.
     * @example
     * // Create many LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadsCampaigns and only return the `leadId`
     * const leadsCampaignsWithLeadIdOnly = await prisma.leadsCampaigns.createManyAndReturn({
     *   select: { leadId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadsCampaignsCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadsCampaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadsCampaigns.
     * @param {LeadsCampaignsDeleteArgs} args - Arguments to delete one LeadsCampaigns.
     * @example
     * // Delete one LeadsCampaigns
     * const LeadsCampaigns = await prisma.leadsCampaigns.delete({
     *   where: {
     *     // ... filter to delete one LeadsCampaigns
     *   }
     * })
     * 
     */
    delete<T extends LeadsCampaignsDeleteArgs>(args: SelectSubset<T, LeadsCampaignsDeleteArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadsCampaigns.
     * @param {LeadsCampaignsUpdateArgs} args - Arguments to update one LeadsCampaigns.
     * @example
     * // Update one LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadsCampaignsUpdateArgs>(args: SelectSubset<T, LeadsCampaignsUpdateArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadsCampaigns.
     * @param {LeadsCampaignsDeleteManyArgs} args - Arguments to filter LeadsCampaigns to delete.
     * @example
     * // Delete a few LeadsCampaigns
     * const { count } = await prisma.leadsCampaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadsCampaignsDeleteManyArgs>(args?: SelectSubset<T, LeadsCampaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadsCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadsCampaignsUpdateManyArgs>(args: SelectSubset<T, LeadsCampaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadsCampaigns and returns the data updated in the database.
     * @param {LeadsCampaignsUpdateManyAndReturnArgs} args - Arguments to update many LeadsCampaigns.
     * @example
     * // Update many LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadsCampaigns and only return the `leadId`
     * const leadsCampaignsWithLeadIdOnly = await prisma.leadsCampaigns.updateManyAndReturn({
     *   select: { leadId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadsCampaignsUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadsCampaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadsCampaigns.
     * @param {LeadsCampaignsUpsertArgs} args - Arguments to update or create a LeadsCampaigns.
     * @example
     * // Update or create a LeadsCampaigns
     * const leadsCampaigns = await prisma.leadsCampaigns.upsert({
     *   create: {
     *     // ... data to create a LeadsCampaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadsCampaigns we want to update
     *   }
     * })
     */
    upsert<T extends LeadsCampaignsUpsertArgs>(args: SelectSubset<T, LeadsCampaignsUpsertArgs<ExtArgs>>): Prisma__LeadsCampaignsClient<$Result.GetResult<Prisma.$LeadsCampaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadsCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsCountArgs} args - Arguments to filter LeadsCampaigns to count.
     * @example
     * // Count the number of LeadsCampaigns
     * const count = await prisma.leadsCampaigns.count({
     *   where: {
     *     // ... the filter for the LeadsCampaigns we want to count
     *   }
     * })
    **/
    count<T extends LeadsCampaignsCountArgs>(
      args?: Subset<T, LeadsCampaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCampaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadsCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsCampaignsAggregateArgs>(args: Subset<T, LeadsCampaignsAggregateArgs>): Prisma.PrismaPromise<GetLeadsCampaignsAggregateType<T>>

    /**
     * Group by LeadsCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCampaignsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadsCampaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadsCampaignsGroupByArgs['orderBy'] }
        : { orderBy?: LeadsCampaignsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadsCampaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadsCampaigns model
   */
  readonly fields: LeadsCampaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadsCampaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadsCampaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaings<T extends CampaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignsDefaultArgs<ExtArgs>>): Prisma__CampaignsClient<$Result.GetResult<Prisma.$CampaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends LeadsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadsDefaultArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadsCampaigns model
   */
  interface LeadsCampaignsFieldRefs {
    readonly leadId: FieldRef<"LeadsCampaigns", 'Int'>
    readonly campaignId: FieldRef<"LeadsCampaigns", 'Int'>
    readonly status: FieldRef<"LeadsCampaigns", 'LeadsCampaignsStatus'>
  }
    

  // Custom InputTypes
  /**
   * LeadsCampaigns findUnique
   */
  export type LeadsCampaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * Filter, which LeadsCampaigns to fetch.
     */
    where: LeadsCampaignsWhereUniqueInput
  }

  /**
   * LeadsCampaigns findUniqueOrThrow
   */
  export type LeadsCampaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * Filter, which LeadsCampaigns to fetch.
     */
    where: LeadsCampaignsWhereUniqueInput
  }

  /**
   * LeadsCampaigns findFirst
   */
  export type LeadsCampaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * Filter, which LeadsCampaigns to fetch.
     */
    where?: LeadsCampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadsCampaigns to fetch.
     */
    orderBy?: LeadsCampaignsOrderByWithRelationInput | LeadsCampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadsCampaigns.
     */
    cursor?: LeadsCampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadsCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadsCampaigns.
     */
    distinct?: LeadsCampaignsScalarFieldEnum | LeadsCampaignsScalarFieldEnum[]
  }

  /**
   * LeadsCampaigns findFirstOrThrow
   */
  export type LeadsCampaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * Filter, which LeadsCampaigns to fetch.
     */
    where?: LeadsCampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadsCampaigns to fetch.
     */
    orderBy?: LeadsCampaignsOrderByWithRelationInput | LeadsCampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadsCampaigns.
     */
    cursor?: LeadsCampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadsCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadsCampaigns.
     */
    distinct?: LeadsCampaignsScalarFieldEnum | LeadsCampaignsScalarFieldEnum[]
  }

  /**
   * LeadsCampaigns findMany
   */
  export type LeadsCampaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * Filter, which LeadsCampaigns to fetch.
     */
    where?: LeadsCampaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadsCampaigns to fetch.
     */
    orderBy?: LeadsCampaignsOrderByWithRelationInput | LeadsCampaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadsCampaigns.
     */
    cursor?: LeadsCampaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadsCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadsCampaigns.
     */
    skip?: number
    distinct?: LeadsCampaignsScalarFieldEnum | LeadsCampaignsScalarFieldEnum[]
  }

  /**
   * LeadsCampaigns create
   */
  export type LeadsCampaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadsCampaigns.
     */
    data: XOR<LeadsCampaignsCreateInput, LeadsCampaignsUncheckedCreateInput>
  }

  /**
   * LeadsCampaigns createMany
   */
  export type LeadsCampaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadsCampaigns.
     */
    data: LeadsCampaignsCreateManyInput | LeadsCampaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadsCampaigns createManyAndReturn
   */
  export type LeadsCampaignsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * The data used to create many LeadsCampaigns.
     */
    data: LeadsCampaignsCreateManyInput | LeadsCampaignsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadsCampaigns update
   */
  export type LeadsCampaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadsCampaigns.
     */
    data: XOR<LeadsCampaignsUpdateInput, LeadsCampaignsUncheckedUpdateInput>
    /**
     * Choose, which LeadsCampaigns to update.
     */
    where: LeadsCampaignsWhereUniqueInput
  }

  /**
   * LeadsCampaigns updateMany
   */
  export type LeadsCampaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadsCampaigns.
     */
    data: XOR<LeadsCampaignsUpdateManyMutationInput, LeadsCampaignsUncheckedUpdateManyInput>
    /**
     * Filter which LeadsCampaigns to update
     */
    where?: LeadsCampaignsWhereInput
    /**
     * Limit how many LeadsCampaigns to update.
     */
    limit?: number
  }

  /**
   * LeadsCampaigns updateManyAndReturn
   */
  export type LeadsCampaignsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * The data used to update LeadsCampaigns.
     */
    data: XOR<LeadsCampaignsUpdateManyMutationInput, LeadsCampaignsUncheckedUpdateManyInput>
    /**
     * Filter which LeadsCampaigns to update
     */
    where?: LeadsCampaignsWhereInput
    /**
     * Limit how many LeadsCampaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadsCampaigns upsert
   */
  export type LeadsCampaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadsCampaigns to update in case it exists.
     */
    where: LeadsCampaignsWhereUniqueInput
    /**
     * In case the LeadsCampaigns found by the `where` argument doesn't exist, create a new LeadsCampaigns with this data.
     */
    create: XOR<LeadsCampaignsCreateInput, LeadsCampaignsUncheckedCreateInput>
    /**
     * In case the LeadsCampaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadsCampaignsUpdateInput, LeadsCampaignsUncheckedUpdateInput>
  }

  /**
   * LeadsCampaigns delete
   */
  export type LeadsCampaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
    /**
     * Filter which LeadsCampaigns to delete.
     */
    where: LeadsCampaignsWhereUniqueInput
  }

  /**
   * LeadsCampaigns deleteMany
   */
  export type LeadsCampaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadsCampaigns to delete
     */
    where?: LeadsCampaignsWhereInput
    /**
     * Limit how many LeadsCampaigns to delete.
     */
    limit?: number
  }

  /**
   * LeadsCampaigns without action
   */
  export type LeadsCampaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadsCampaigns
     */
    select?: LeadsCampaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadsCampaigns
     */
    omit?: LeadsCampaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsCampaignsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const CampaignsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type CampaignsScalarFieldEnum = (typeof CampaignsScalarFieldEnum)[keyof typeof CampaignsScalarFieldEnum]


  export const LeadsCampaignsScalarFieldEnum: {
    leadId: 'leadId',
    campaignId: 'campaignId',
    status: 'status'
  };

  export type LeadsCampaignsScalarFieldEnum = (typeof LeadsCampaignsScalarFieldEnum)[keyof typeof LeadsCampaignsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LeadsCampaignsStatus'
   */
  export type EnumLeadsCampaignsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadsCampaignsStatus'>
    


  /**
   * Reference to a field of type 'LeadsCampaignsStatus[]'
   */
  export type ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadsCampaignsStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GroupsWhereInput = {
    AND?: GroupsWhereInput | GroupsWhereInput[]
    OR?: GroupsWhereInput[]
    NOT?: GroupsWhereInput | GroupsWhereInput[]
    id?: IntFilter<"Groups"> | number
    name?: StringFilter<"Groups"> | string
    description?: StringFilter<"Groups"> | string
    leads?: LeadsListRelationFilter
  }

  export type GroupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    leads?: LeadsOrderByRelationAggregateInput
  }

  export type GroupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupsWhereInput | GroupsWhereInput[]
    OR?: GroupsWhereInput[]
    NOT?: GroupsWhereInput | GroupsWhereInput[]
    name?: StringFilter<"Groups"> | string
    description?: StringFilter<"Groups"> | string
    leads?: LeadsListRelationFilter
  }, "id">

  export type GroupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: GroupsCountOrderByAggregateInput
    _avg?: GroupsAvgOrderByAggregateInput
    _max?: GroupsMaxOrderByAggregateInput
    _min?: GroupsMinOrderByAggregateInput
    _sum?: GroupsSumOrderByAggregateInput
  }

  export type GroupsScalarWhereWithAggregatesInput = {
    AND?: GroupsScalarWhereWithAggregatesInput | GroupsScalarWhereWithAggregatesInput[]
    OR?: GroupsScalarWhereWithAggregatesInput[]
    NOT?: GroupsScalarWhereWithAggregatesInput | GroupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Groups"> | number
    name?: StringWithAggregatesFilter<"Groups"> | string
    description?: StringWithAggregatesFilter<"Groups"> | string
  }

  export type LeadsWhereInput = {
    AND?: LeadsWhereInput | LeadsWhereInput[]
    OR?: LeadsWhereInput[]
    NOT?: LeadsWhereInput | LeadsWhereInput[]
    id?: IntFilter<"Leads"> | number
    name?: StringFilter<"Leads"> | string
    email?: StringFilter<"Leads"> | string
    phone?: StringFilter<"Leads"> | string
    status?: EnumLeadStatusFilter<"Leads"> | $Enums.LeadStatus
    createdAt?: DateTimeFilter<"Leads"> | Date | string
    updatedAt?: DateTimeFilter<"Leads"> | Date | string
    groups?: GroupsListRelationFilter
    campaigns?: LeadsCampaignsListRelationFilter
  }

  export type LeadsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: GroupsOrderByRelationAggregateInput
    campaigns?: LeadsCampaignsOrderByRelationAggregateInput
  }

  export type LeadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: LeadsWhereInput | LeadsWhereInput[]
    OR?: LeadsWhereInput[]
    NOT?: LeadsWhereInput | LeadsWhereInput[]
    name?: StringFilter<"Leads"> | string
    phone?: StringFilter<"Leads"> | string
    status?: EnumLeadStatusFilter<"Leads"> | $Enums.LeadStatus
    createdAt?: DateTimeFilter<"Leads"> | Date | string
    updatedAt?: DateTimeFilter<"Leads"> | Date | string
    groups?: GroupsListRelationFilter
    campaigns?: LeadsCampaignsListRelationFilter
  }, "id" | "email">

  export type LeadsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadsCountOrderByAggregateInput
    _avg?: LeadsAvgOrderByAggregateInput
    _max?: LeadsMaxOrderByAggregateInput
    _min?: LeadsMinOrderByAggregateInput
    _sum?: LeadsSumOrderByAggregateInput
  }

  export type LeadsScalarWhereWithAggregatesInput = {
    AND?: LeadsScalarWhereWithAggregatesInput | LeadsScalarWhereWithAggregatesInput[]
    OR?: LeadsScalarWhereWithAggregatesInput[]
    NOT?: LeadsScalarWhereWithAggregatesInput | LeadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leads"> | number
    name?: StringWithAggregatesFilter<"Leads"> | string
    email?: StringWithAggregatesFilter<"Leads"> | string
    phone?: StringWithAggregatesFilter<"Leads"> | string
    status?: EnumLeadStatusWithAggregatesFilter<"Leads"> | $Enums.LeadStatus
    createdAt?: DateTimeWithAggregatesFilter<"Leads"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leads"> | Date | string
  }

  export type CampaignsWhereInput = {
    AND?: CampaignsWhereInput | CampaignsWhereInput[]
    OR?: CampaignsWhereInput[]
    NOT?: CampaignsWhereInput | CampaignsWhereInput[]
    id?: IntFilter<"Campaigns"> | number
    name?: StringFilter<"Campaigns"> | string
    description?: StringFilter<"Campaigns"> | string
    startDate?: DateTimeFilter<"Campaigns"> | Date | string
    endDate?: DateTimeNullableFilter<"Campaigns"> | Date | string | null
    leads?: LeadsCampaignsListRelationFilter
  }

  export type CampaignsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    leads?: LeadsCampaignsOrderByRelationAggregateInput
  }

  export type CampaignsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignsWhereInput | CampaignsWhereInput[]
    OR?: CampaignsWhereInput[]
    NOT?: CampaignsWhereInput | CampaignsWhereInput[]
    name?: StringFilter<"Campaigns"> | string
    description?: StringFilter<"Campaigns"> | string
    startDate?: DateTimeFilter<"Campaigns"> | Date | string
    endDate?: DateTimeNullableFilter<"Campaigns"> | Date | string | null
    leads?: LeadsCampaignsListRelationFilter
  }, "id">

  export type CampaignsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: CampaignsCountOrderByAggregateInput
    _avg?: CampaignsAvgOrderByAggregateInput
    _max?: CampaignsMaxOrderByAggregateInput
    _min?: CampaignsMinOrderByAggregateInput
    _sum?: CampaignsSumOrderByAggregateInput
  }

  export type CampaignsScalarWhereWithAggregatesInput = {
    AND?: CampaignsScalarWhereWithAggregatesInput | CampaignsScalarWhereWithAggregatesInput[]
    OR?: CampaignsScalarWhereWithAggregatesInput[]
    NOT?: CampaignsScalarWhereWithAggregatesInput | CampaignsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaigns"> | number
    name?: StringWithAggregatesFilter<"Campaigns"> | string
    description?: StringWithAggregatesFilter<"Campaigns"> | string
    startDate?: DateTimeWithAggregatesFilter<"Campaigns"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Campaigns"> | Date | string | null
  }

  export type LeadsCampaignsWhereInput = {
    AND?: LeadsCampaignsWhereInput | LeadsCampaignsWhereInput[]
    OR?: LeadsCampaignsWhereInput[]
    NOT?: LeadsCampaignsWhereInput | LeadsCampaignsWhereInput[]
    leadId?: IntFilter<"LeadsCampaigns"> | number
    campaignId?: IntFilter<"LeadsCampaigns"> | number
    status?: EnumLeadsCampaignsStatusFilter<"LeadsCampaigns"> | $Enums.LeadsCampaignsStatus
    campaings?: XOR<CampaignsScalarRelationFilter, CampaignsWhereInput>
    leads?: XOR<LeadsScalarRelationFilter, LeadsWhereInput>
  }

  export type LeadsCampaignsOrderByWithRelationInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    campaings?: CampaignsOrderByWithRelationInput
    leads?: LeadsOrderByWithRelationInput
  }

  export type LeadsCampaignsWhereUniqueInput = Prisma.AtLeast<{
    leadId_campaignId?: LeadsCampaignsLeadIdCampaignIdCompoundUniqueInput
    AND?: LeadsCampaignsWhereInput | LeadsCampaignsWhereInput[]
    OR?: LeadsCampaignsWhereInput[]
    NOT?: LeadsCampaignsWhereInput | LeadsCampaignsWhereInput[]
    leadId?: IntFilter<"LeadsCampaigns"> | number
    campaignId?: IntFilter<"LeadsCampaigns"> | number
    status?: EnumLeadsCampaignsStatusFilter<"LeadsCampaigns"> | $Enums.LeadsCampaignsStatus
    campaings?: XOR<CampaignsScalarRelationFilter, CampaignsWhereInput>
    leads?: XOR<LeadsScalarRelationFilter, LeadsWhereInput>
  }, "leadId_campaignId">

  export type LeadsCampaignsOrderByWithAggregationInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    _count?: LeadsCampaignsCountOrderByAggregateInput
    _avg?: LeadsCampaignsAvgOrderByAggregateInput
    _max?: LeadsCampaignsMaxOrderByAggregateInput
    _min?: LeadsCampaignsMinOrderByAggregateInput
    _sum?: LeadsCampaignsSumOrderByAggregateInput
  }

  export type LeadsCampaignsScalarWhereWithAggregatesInput = {
    AND?: LeadsCampaignsScalarWhereWithAggregatesInput | LeadsCampaignsScalarWhereWithAggregatesInput[]
    OR?: LeadsCampaignsScalarWhereWithAggregatesInput[]
    NOT?: LeadsCampaignsScalarWhereWithAggregatesInput | LeadsCampaignsScalarWhereWithAggregatesInput[]
    leadId?: IntWithAggregatesFilter<"LeadsCampaigns"> | number
    campaignId?: IntWithAggregatesFilter<"LeadsCampaigns"> | number
    status?: EnumLeadsCampaignsStatusWithAggregatesFilter<"LeadsCampaigns"> | $Enums.LeadsCampaignsStatus
  }

  export type GroupsCreateInput = {
    name: string
    description: string
    leads?: LeadsCreateNestedManyWithoutGroupsInput
  }

  export type GroupsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    leads?: LeadsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    leads?: LeadsUpdateManyWithoutGroupsNestedInput
  }

  export type GroupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    leads?: LeadsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupsCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type GroupsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GroupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LeadsCreateInput = {
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupsCreateNestedManyWithoutLeadsInput
    campaigns?: LeadsCampaignsCreateNestedManyWithoutLeadsInput
  }

  export type LeadsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupsUncheckedCreateNestedManyWithoutLeadsInput
    campaigns?: LeadsCampaignsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type LeadsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupsUpdateManyWithoutLeadsNestedInput
    campaigns?: LeadsCampaignsUpdateManyWithoutLeadsNestedInput
  }

  export type LeadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupsUncheckedUpdateManyWithoutLeadsNestedInput
    campaigns?: LeadsCampaignsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type LeadsCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignsCreateInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    leads?: LeadsCampaignsCreateNestedManyWithoutCampaingsInput
  }

  export type CampaignsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    leads?: LeadsCampaignsUncheckedCreateNestedManyWithoutCampaingsInput
  }

  export type CampaignsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadsCampaignsUpdateManyWithoutCampaingsNestedInput
  }

  export type CampaignsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadsCampaignsUncheckedUpdateManyWithoutCampaingsNestedInput
  }

  export type CampaignsCreateManyInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type CampaignsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadsCampaignsCreateInput = {
    status: $Enums.LeadsCampaignsStatus
    campaings: CampaignsCreateNestedOneWithoutLeadsInput
    leads: LeadsCreateNestedOneWithoutCampaignsInput
  }

  export type LeadsCampaignsUncheckedCreateInput = {
    leadId: number
    campaignId: number
    status: $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsUpdateInput = {
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
    campaings?: CampaignsUpdateOneRequiredWithoutLeadsNestedInput
    leads?: LeadsUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type LeadsCampaignsUncheckedUpdateInput = {
    leadId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsCreateManyInput = {
    leadId: number
    campaignId: number
    status: $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsUpdateManyMutationInput = {
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsUncheckedUpdateManyInput = {
    leadId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LeadsListRelationFilter = {
    every?: LeadsWhereInput
    some?: LeadsWhereInput
    none?: LeadsWhereInput
  }

  export type LeadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type GroupsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type GroupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type GroupsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupsListRelationFilter = {
    every?: GroupsWhereInput
    some?: GroupsWhereInput
    none?: GroupsWhereInput
  }

  export type LeadsCampaignsListRelationFilter = {
    every?: LeadsCampaignsWhereInput
    some?: LeadsCampaignsWhereInput
    none?: LeadsCampaignsWhereInput
  }

  export type GroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadsCampaignsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LeadsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type CampaignsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaignsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type CampaignsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type CampaignsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumLeadsCampaignsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadsCampaignsStatus | EnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadsCampaignsStatusFilter<$PrismaModel> | $Enums.LeadsCampaignsStatus
  }

  export type CampaignsScalarRelationFilter = {
    is?: CampaignsWhereInput
    isNot?: CampaignsWhereInput
  }

  export type LeadsScalarRelationFilter = {
    is?: LeadsWhereInput
    isNot?: LeadsWhereInput
  }

  export type LeadsCampaignsLeadIdCampaignIdCompoundUniqueInput = {
    leadId: number
    campaignId: number
  }

  export type LeadsCampaignsCountOrderByAggregateInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
  }

  export type LeadsCampaignsAvgOrderByAggregateInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
  }

  export type LeadsCampaignsMaxOrderByAggregateInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
  }

  export type LeadsCampaignsMinOrderByAggregateInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
  }

  export type LeadsCampaignsSumOrderByAggregateInput = {
    leadId?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumLeadsCampaignsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadsCampaignsStatus | EnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadsCampaignsStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadsCampaignsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadsCampaignsStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadsCampaignsStatusFilter<$PrismaModel>
  }

  export type LeadsCreateNestedManyWithoutGroupsInput = {
    create?: XOR<LeadsCreateWithoutGroupsInput, LeadsUncheckedCreateWithoutGroupsInput> | LeadsCreateWithoutGroupsInput[] | LeadsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutGroupsInput | LeadsCreateOrConnectWithoutGroupsInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
  }

  export type LeadsUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<LeadsCreateWithoutGroupsInput, LeadsUncheckedCreateWithoutGroupsInput> | LeadsCreateWithoutGroupsInput[] | LeadsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutGroupsInput | LeadsCreateOrConnectWithoutGroupsInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LeadsUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<LeadsCreateWithoutGroupsInput, LeadsUncheckedCreateWithoutGroupsInput> | LeadsCreateWithoutGroupsInput[] | LeadsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutGroupsInput | LeadsCreateOrConnectWithoutGroupsInput[]
    upsert?: LeadsUpsertWithWhereUniqueWithoutGroupsInput | LeadsUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    update?: LeadsUpdateWithWhereUniqueWithoutGroupsInput | LeadsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: LeadsUpdateManyWithWhereWithoutGroupsInput | LeadsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeadsUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<LeadsCreateWithoutGroupsInput, LeadsUncheckedCreateWithoutGroupsInput> | LeadsCreateWithoutGroupsInput[] | LeadsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutGroupsInput | LeadsCreateOrConnectWithoutGroupsInput[]
    upsert?: LeadsUpsertWithWhereUniqueWithoutGroupsInput | LeadsUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    update?: LeadsUpdateWithWhereUniqueWithoutGroupsInput | LeadsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: LeadsUpdateManyWithWhereWithoutGroupsInput | LeadsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
  }

  export type GroupsCreateNestedManyWithoutLeadsInput = {
    create?: XOR<GroupsCreateWithoutLeadsInput, GroupsUncheckedCreateWithoutLeadsInput> | GroupsCreateWithoutLeadsInput[] | GroupsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutLeadsInput | GroupsCreateOrConnectWithoutLeadsInput[]
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
  }

  export type LeadsCampaignsCreateNestedManyWithoutLeadsInput = {
    create?: XOR<LeadsCampaignsCreateWithoutLeadsInput, LeadsCampaignsUncheckedCreateWithoutLeadsInput> | LeadsCampaignsCreateWithoutLeadsInput[] | LeadsCampaignsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutLeadsInput | LeadsCampaignsCreateOrConnectWithoutLeadsInput[]
    createMany?: LeadsCampaignsCreateManyLeadsInputEnvelope
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
  }

  export type GroupsUncheckedCreateNestedManyWithoutLeadsInput = {
    create?: XOR<GroupsCreateWithoutLeadsInput, GroupsUncheckedCreateWithoutLeadsInput> | GroupsCreateWithoutLeadsInput[] | GroupsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutLeadsInput | GroupsCreateOrConnectWithoutLeadsInput[]
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
  }

  export type LeadsCampaignsUncheckedCreateNestedManyWithoutLeadsInput = {
    create?: XOR<LeadsCampaignsCreateWithoutLeadsInput, LeadsCampaignsUncheckedCreateWithoutLeadsInput> | LeadsCampaignsCreateWithoutLeadsInput[] | LeadsCampaignsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutLeadsInput | LeadsCampaignsCreateOrConnectWithoutLeadsInput[]
    createMany?: LeadsCampaignsCreateManyLeadsInputEnvelope
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupsUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<GroupsCreateWithoutLeadsInput, GroupsUncheckedCreateWithoutLeadsInput> | GroupsCreateWithoutLeadsInput[] | GroupsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutLeadsInput | GroupsCreateOrConnectWithoutLeadsInput[]
    upsert?: GroupsUpsertWithWhereUniqueWithoutLeadsInput | GroupsUpsertWithWhereUniqueWithoutLeadsInput[]
    set?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    disconnect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    delete?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    update?: GroupsUpdateWithWhereUniqueWithoutLeadsInput | GroupsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: GroupsUpdateManyWithWhereWithoutLeadsInput | GroupsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
  }

  export type LeadsCampaignsUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<LeadsCampaignsCreateWithoutLeadsInput, LeadsCampaignsUncheckedCreateWithoutLeadsInput> | LeadsCampaignsCreateWithoutLeadsInput[] | LeadsCampaignsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutLeadsInput | LeadsCampaignsCreateOrConnectWithoutLeadsInput[]
    upsert?: LeadsCampaignsUpsertWithWhereUniqueWithoutLeadsInput | LeadsCampaignsUpsertWithWhereUniqueWithoutLeadsInput[]
    createMany?: LeadsCampaignsCreateManyLeadsInputEnvelope
    set?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    disconnect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    delete?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    update?: LeadsCampaignsUpdateWithWhereUniqueWithoutLeadsInput | LeadsCampaignsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: LeadsCampaignsUpdateManyWithWhereWithoutLeadsInput | LeadsCampaignsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: LeadsCampaignsScalarWhereInput | LeadsCampaignsScalarWhereInput[]
  }

  export type GroupsUncheckedUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<GroupsCreateWithoutLeadsInput, GroupsUncheckedCreateWithoutLeadsInput> | GroupsCreateWithoutLeadsInput[] | GroupsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutLeadsInput | GroupsCreateOrConnectWithoutLeadsInput[]
    upsert?: GroupsUpsertWithWhereUniqueWithoutLeadsInput | GroupsUpsertWithWhereUniqueWithoutLeadsInput[]
    set?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    disconnect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    delete?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    update?: GroupsUpdateWithWhereUniqueWithoutLeadsInput | GroupsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: GroupsUpdateManyWithWhereWithoutLeadsInput | GroupsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
  }

  export type LeadsCampaignsUncheckedUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<LeadsCampaignsCreateWithoutLeadsInput, LeadsCampaignsUncheckedCreateWithoutLeadsInput> | LeadsCampaignsCreateWithoutLeadsInput[] | LeadsCampaignsUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutLeadsInput | LeadsCampaignsCreateOrConnectWithoutLeadsInput[]
    upsert?: LeadsCampaignsUpsertWithWhereUniqueWithoutLeadsInput | LeadsCampaignsUpsertWithWhereUniqueWithoutLeadsInput[]
    createMany?: LeadsCampaignsCreateManyLeadsInputEnvelope
    set?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    disconnect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    delete?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    update?: LeadsCampaignsUpdateWithWhereUniqueWithoutLeadsInput | LeadsCampaignsUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: LeadsCampaignsUpdateManyWithWhereWithoutLeadsInput | LeadsCampaignsUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: LeadsCampaignsScalarWhereInput | LeadsCampaignsScalarWhereInput[]
  }

  export type LeadsCampaignsCreateNestedManyWithoutCampaingsInput = {
    create?: XOR<LeadsCampaignsCreateWithoutCampaingsInput, LeadsCampaignsUncheckedCreateWithoutCampaingsInput> | LeadsCampaignsCreateWithoutCampaingsInput[] | LeadsCampaignsUncheckedCreateWithoutCampaingsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutCampaingsInput | LeadsCampaignsCreateOrConnectWithoutCampaingsInput[]
    createMany?: LeadsCampaignsCreateManyCampaingsInputEnvelope
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
  }

  export type LeadsCampaignsUncheckedCreateNestedManyWithoutCampaingsInput = {
    create?: XOR<LeadsCampaignsCreateWithoutCampaingsInput, LeadsCampaignsUncheckedCreateWithoutCampaingsInput> | LeadsCampaignsCreateWithoutCampaingsInput[] | LeadsCampaignsUncheckedCreateWithoutCampaingsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutCampaingsInput | LeadsCampaignsCreateOrConnectWithoutCampaingsInput[]
    createMany?: LeadsCampaignsCreateManyCampaingsInputEnvelope
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LeadsCampaignsUpdateManyWithoutCampaingsNestedInput = {
    create?: XOR<LeadsCampaignsCreateWithoutCampaingsInput, LeadsCampaignsUncheckedCreateWithoutCampaingsInput> | LeadsCampaignsCreateWithoutCampaingsInput[] | LeadsCampaignsUncheckedCreateWithoutCampaingsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutCampaingsInput | LeadsCampaignsCreateOrConnectWithoutCampaingsInput[]
    upsert?: LeadsCampaignsUpsertWithWhereUniqueWithoutCampaingsInput | LeadsCampaignsUpsertWithWhereUniqueWithoutCampaingsInput[]
    createMany?: LeadsCampaignsCreateManyCampaingsInputEnvelope
    set?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    disconnect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    delete?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    update?: LeadsCampaignsUpdateWithWhereUniqueWithoutCampaingsInput | LeadsCampaignsUpdateWithWhereUniqueWithoutCampaingsInput[]
    updateMany?: LeadsCampaignsUpdateManyWithWhereWithoutCampaingsInput | LeadsCampaignsUpdateManyWithWhereWithoutCampaingsInput[]
    deleteMany?: LeadsCampaignsScalarWhereInput | LeadsCampaignsScalarWhereInput[]
  }

  export type LeadsCampaignsUncheckedUpdateManyWithoutCampaingsNestedInput = {
    create?: XOR<LeadsCampaignsCreateWithoutCampaingsInput, LeadsCampaignsUncheckedCreateWithoutCampaingsInput> | LeadsCampaignsCreateWithoutCampaingsInput[] | LeadsCampaignsUncheckedCreateWithoutCampaingsInput[]
    connectOrCreate?: LeadsCampaignsCreateOrConnectWithoutCampaingsInput | LeadsCampaignsCreateOrConnectWithoutCampaingsInput[]
    upsert?: LeadsCampaignsUpsertWithWhereUniqueWithoutCampaingsInput | LeadsCampaignsUpsertWithWhereUniqueWithoutCampaingsInput[]
    createMany?: LeadsCampaignsCreateManyCampaingsInputEnvelope
    set?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    disconnect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    delete?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    connect?: LeadsCampaignsWhereUniqueInput | LeadsCampaignsWhereUniqueInput[]
    update?: LeadsCampaignsUpdateWithWhereUniqueWithoutCampaingsInput | LeadsCampaignsUpdateWithWhereUniqueWithoutCampaingsInput[]
    updateMany?: LeadsCampaignsUpdateManyWithWhereWithoutCampaingsInput | LeadsCampaignsUpdateManyWithWhereWithoutCampaingsInput[]
    deleteMany?: LeadsCampaignsScalarWhereInput | LeadsCampaignsScalarWhereInput[]
  }

  export type CampaignsCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CampaignsCreateWithoutLeadsInput, CampaignsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignsCreateOrConnectWithoutLeadsInput
    connect?: CampaignsWhereUniqueInput
  }

  export type LeadsCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<LeadsCreateWithoutCampaignsInput, LeadsUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: LeadsCreateOrConnectWithoutCampaignsInput
    connect?: LeadsWhereUniqueInput
  }

  export type EnumLeadsCampaignsStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadsCampaignsStatus
  }

  export type CampaignsUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<CampaignsCreateWithoutLeadsInput, CampaignsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignsCreateOrConnectWithoutLeadsInput
    upsert?: CampaignsUpsertWithoutLeadsInput
    connect?: CampaignsWhereUniqueInput
    update?: XOR<XOR<CampaignsUpdateToOneWithWhereWithoutLeadsInput, CampaignsUpdateWithoutLeadsInput>, CampaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadsUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<LeadsCreateWithoutCampaignsInput, LeadsUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: LeadsCreateOrConnectWithoutCampaignsInput
    upsert?: LeadsUpsertWithoutCampaignsInput
    connect?: LeadsWhereUniqueInput
    update?: XOR<XOR<LeadsUpdateToOneWithWhereWithoutCampaignsInput, LeadsUpdateWithoutCampaignsInput>, LeadsUncheckedUpdateWithoutCampaignsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLeadsCampaignsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadsCampaignsStatus | EnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadsCampaignsStatusFilter<$PrismaModel> | $Enums.LeadsCampaignsStatus
  }

  export type NestedEnumLeadsCampaignsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadsCampaignsStatus | EnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadsCampaignsStatus[] | ListEnumLeadsCampaignsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadsCampaignsStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadsCampaignsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadsCampaignsStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadsCampaignsStatusFilter<$PrismaModel>
  }

  export type LeadsCreateWithoutGroupsInput = {
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: LeadsCampaignsCreateNestedManyWithoutLeadsInput
  }

  export type LeadsUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: LeadsCampaignsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type LeadsCreateOrConnectWithoutGroupsInput = {
    where: LeadsWhereUniqueInput
    create: XOR<LeadsCreateWithoutGroupsInput, LeadsUncheckedCreateWithoutGroupsInput>
  }

  export type LeadsUpsertWithWhereUniqueWithoutGroupsInput = {
    where: LeadsWhereUniqueInput
    update: XOR<LeadsUpdateWithoutGroupsInput, LeadsUncheckedUpdateWithoutGroupsInput>
    create: XOR<LeadsCreateWithoutGroupsInput, LeadsUncheckedCreateWithoutGroupsInput>
  }

  export type LeadsUpdateWithWhereUniqueWithoutGroupsInput = {
    where: LeadsWhereUniqueInput
    data: XOR<LeadsUpdateWithoutGroupsInput, LeadsUncheckedUpdateWithoutGroupsInput>
  }

  export type LeadsUpdateManyWithWhereWithoutGroupsInput = {
    where: LeadsScalarWhereInput
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyWithoutGroupsInput>
  }

  export type LeadsScalarWhereInput = {
    AND?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
    OR?: LeadsScalarWhereInput[]
    NOT?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
    id?: IntFilter<"Leads"> | number
    name?: StringFilter<"Leads"> | string
    email?: StringFilter<"Leads"> | string
    phone?: StringFilter<"Leads"> | string
    status?: EnumLeadStatusFilter<"Leads"> | $Enums.LeadStatus
    createdAt?: DateTimeFilter<"Leads"> | Date | string
    updatedAt?: DateTimeFilter<"Leads"> | Date | string
  }

  export type GroupsCreateWithoutLeadsInput = {
    name: string
    description: string
  }

  export type GroupsUncheckedCreateWithoutLeadsInput = {
    id?: number
    name: string
    description: string
  }

  export type GroupsCreateOrConnectWithoutLeadsInput = {
    where: GroupsWhereUniqueInput
    create: XOR<GroupsCreateWithoutLeadsInput, GroupsUncheckedCreateWithoutLeadsInput>
  }

  export type LeadsCampaignsCreateWithoutLeadsInput = {
    status: $Enums.LeadsCampaignsStatus
    campaings: CampaignsCreateNestedOneWithoutLeadsInput
  }

  export type LeadsCampaignsUncheckedCreateWithoutLeadsInput = {
    campaignId: number
    status: $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsCreateOrConnectWithoutLeadsInput = {
    where: LeadsCampaignsWhereUniqueInput
    create: XOR<LeadsCampaignsCreateWithoutLeadsInput, LeadsCampaignsUncheckedCreateWithoutLeadsInput>
  }

  export type LeadsCampaignsCreateManyLeadsInputEnvelope = {
    data: LeadsCampaignsCreateManyLeadsInput | LeadsCampaignsCreateManyLeadsInput[]
    skipDuplicates?: boolean
  }

  export type GroupsUpsertWithWhereUniqueWithoutLeadsInput = {
    where: GroupsWhereUniqueInput
    update: XOR<GroupsUpdateWithoutLeadsInput, GroupsUncheckedUpdateWithoutLeadsInput>
    create: XOR<GroupsCreateWithoutLeadsInput, GroupsUncheckedCreateWithoutLeadsInput>
  }

  export type GroupsUpdateWithWhereUniqueWithoutLeadsInput = {
    where: GroupsWhereUniqueInput
    data: XOR<GroupsUpdateWithoutLeadsInput, GroupsUncheckedUpdateWithoutLeadsInput>
  }

  export type GroupsUpdateManyWithWhereWithoutLeadsInput = {
    where: GroupsScalarWhereInput
    data: XOR<GroupsUpdateManyMutationInput, GroupsUncheckedUpdateManyWithoutLeadsInput>
  }

  export type GroupsScalarWhereInput = {
    AND?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
    OR?: GroupsScalarWhereInput[]
    NOT?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
    id?: IntFilter<"Groups"> | number
    name?: StringFilter<"Groups"> | string
    description?: StringFilter<"Groups"> | string
  }

  export type LeadsCampaignsUpsertWithWhereUniqueWithoutLeadsInput = {
    where: LeadsCampaignsWhereUniqueInput
    update: XOR<LeadsCampaignsUpdateWithoutLeadsInput, LeadsCampaignsUncheckedUpdateWithoutLeadsInput>
    create: XOR<LeadsCampaignsCreateWithoutLeadsInput, LeadsCampaignsUncheckedCreateWithoutLeadsInput>
  }

  export type LeadsCampaignsUpdateWithWhereUniqueWithoutLeadsInput = {
    where: LeadsCampaignsWhereUniqueInput
    data: XOR<LeadsCampaignsUpdateWithoutLeadsInput, LeadsCampaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadsCampaignsUpdateManyWithWhereWithoutLeadsInput = {
    where: LeadsCampaignsScalarWhereInput
    data: XOR<LeadsCampaignsUpdateManyMutationInput, LeadsCampaignsUncheckedUpdateManyWithoutLeadsInput>
  }

  export type LeadsCampaignsScalarWhereInput = {
    AND?: LeadsCampaignsScalarWhereInput | LeadsCampaignsScalarWhereInput[]
    OR?: LeadsCampaignsScalarWhereInput[]
    NOT?: LeadsCampaignsScalarWhereInput | LeadsCampaignsScalarWhereInput[]
    leadId?: IntFilter<"LeadsCampaigns"> | number
    campaignId?: IntFilter<"LeadsCampaigns"> | number
    status?: EnumLeadsCampaignsStatusFilter<"LeadsCampaigns"> | $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsCreateWithoutCampaingsInput = {
    status: $Enums.LeadsCampaignsStatus
    leads: LeadsCreateNestedOneWithoutCampaignsInput
  }

  export type LeadsCampaignsUncheckedCreateWithoutCampaingsInput = {
    leadId: number
    status: $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsCreateOrConnectWithoutCampaingsInput = {
    where: LeadsCampaignsWhereUniqueInput
    create: XOR<LeadsCampaignsCreateWithoutCampaingsInput, LeadsCampaignsUncheckedCreateWithoutCampaingsInput>
  }

  export type LeadsCampaignsCreateManyCampaingsInputEnvelope = {
    data: LeadsCampaignsCreateManyCampaingsInput | LeadsCampaignsCreateManyCampaingsInput[]
    skipDuplicates?: boolean
  }

  export type LeadsCampaignsUpsertWithWhereUniqueWithoutCampaingsInput = {
    where: LeadsCampaignsWhereUniqueInput
    update: XOR<LeadsCampaignsUpdateWithoutCampaingsInput, LeadsCampaignsUncheckedUpdateWithoutCampaingsInput>
    create: XOR<LeadsCampaignsCreateWithoutCampaingsInput, LeadsCampaignsUncheckedCreateWithoutCampaingsInput>
  }

  export type LeadsCampaignsUpdateWithWhereUniqueWithoutCampaingsInput = {
    where: LeadsCampaignsWhereUniqueInput
    data: XOR<LeadsCampaignsUpdateWithoutCampaingsInput, LeadsCampaignsUncheckedUpdateWithoutCampaingsInput>
  }

  export type LeadsCampaignsUpdateManyWithWhereWithoutCampaingsInput = {
    where: LeadsCampaignsScalarWhereInput
    data: XOR<LeadsCampaignsUpdateManyMutationInput, LeadsCampaignsUncheckedUpdateManyWithoutCampaingsInput>
  }

  export type CampaignsCreateWithoutLeadsInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type CampaignsUncheckedCreateWithoutLeadsInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type CampaignsCreateOrConnectWithoutLeadsInput = {
    where: CampaignsWhereUniqueInput
    create: XOR<CampaignsCreateWithoutLeadsInput, CampaignsUncheckedCreateWithoutLeadsInput>
  }

  export type LeadsCreateWithoutCampaignsInput = {
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupsCreateNestedManyWithoutLeadsInput
  }

  export type LeadsUncheckedCreateWithoutCampaignsInput = {
    id?: number
    name: string
    email: string
    phone: string
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupsUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type LeadsCreateOrConnectWithoutCampaignsInput = {
    where: LeadsWhereUniqueInput
    create: XOR<LeadsCreateWithoutCampaignsInput, LeadsUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignsUpsertWithoutLeadsInput = {
    update: XOR<CampaignsUpdateWithoutLeadsInput, CampaignsUncheckedUpdateWithoutLeadsInput>
    create: XOR<CampaignsCreateWithoutLeadsInput, CampaignsUncheckedCreateWithoutLeadsInput>
    where?: CampaignsWhereInput
  }

  export type CampaignsUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CampaignsWhereInput
    data: XOR<CampaignsUpdateWithoutLeadsInput, CampaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignsUpdateWithoutLeadsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignsUncheckedUpdateWithoutLeadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadsUpsertWithoutCampaignsInput = {
    update: XOR<LeadsUpdateWithoutCampaignsInput, LeadsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<LeadsCreateWithoutCampaignsInput, LeadsUncheckedCreateWithoutCampaignsInput>
    where?: LeadsWhereInput
  }

  export type LeadsUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: LeadsWhereInput
    data: XOR<LeadsUpdateWithoutCampaignsInput, LeadsUncheckedUpdateWithoutCampaignsInput>
  }

  export type LeadsUpdateWithoutCampaignsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupsUpdateManyWithoutLeadsNestedInput
  }

  export type LeadsUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type LeadsUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: LeadsCampaignsUpdateManyWithoutLeadsNestedInput
  }

  export type LeadsUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: LeadsCampaignsUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type LeadsUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsCampaignsCreateManyLeadsInput = {
    campaignId: number
    status: $Enums.LeadsCampaignsStatus
  }

  export type GroupsUpdateWithoutLeadsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GroupsUncheckedUpdateWithoutLeadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GroupsUncheckedUpdateManyWithoutLeadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LeadsCampaignsUpdateWithoutLeadsInput = {
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
    campaings?: CampaignsUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type LeadsCampaignsUncheckedUpdateWithoutLeadsInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsUncheckedUpdateManyWithoutLeadsInput = {
    campaignId?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsCreateManyCampaingsInput = {
    leadId: number
    status: $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsUpdateWithoutCampaingsInput = {
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
    leads?: LeadsUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type LeadsCampaignsUncheckedUpdateWithoutCampaingsInput = {
    leadId?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }

  export type LeadsCampaignsUncheckedUpdateManyWithoutCampaingsInput = {
    leadId?: IntFieldUpdateOperationsInput | number
    status?: EnumLeadsCampaignsStatusFieldUpdateOperationsInput | $Enums.LeadsCampaignsStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}