
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Experiences
 * 
 */
export type Experiences = $Result.DefaultSelection<Prisma.$ExperiencesPayload>
/**
 * Model SideProject
 * 
 */
export type SideProject = $Result.DefaultSelection<Prisma.$SideProjectPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Experiences
 * const experiences = await prisma.experiences.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Experiences
   * const experiences = await prisma.experiences.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.experiences`: Exposes CRUD operations for the **Experiences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experiences.findMany()
    * ```
    */
  get experiences(): Prisma.ExperiencesDelegate<ExtArgs>;

  /**
   * `prisma.sideProject`: Exposes CRUD operations for the **SideProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SideProjects
    * const sideProjects = await prisma.sideProject.findMany()
    * ```
    */
  get sideProject(): Prisma.SideProjectDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Experiences: 'Experiences',
    SideProject: 'SideProject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'experiences' | 'sideProject'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Experiences: {
        payload: Prisma.$ExperiencesPayload<ExtArgs>
        fields: Prisma.ExperiencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperiencesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperiencesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          findFirst: {
            args: Prisma.ExperiencesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperiencesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          findMany: {
            args: Prisma.ExperiencesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>[]
          }
          create: {
            args: Prisma.ExperiencesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          createMany: {
            args: Prisma.ExperiencesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExperiencesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          update: {
            args: Prisma.ExperiencesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          deleteMany: {
            args: Prisma.ExperiencesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExperiencesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExperiencesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          aggregate: {
            args: Prisma.ExperiencesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExperiences>
          }
          groupBy: {
            args: Prisma.ExperiencesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExperiencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperiencesCountArgs<ExtArgs>,
            result: $Utils.Optional<ExperiencesCountAggregateOutputType> | number
          }
        }
      }
      SideProject: {
        payload: Prisma.$SideProjectPayload<ExtArgs>
        fields: Prisma.SideProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SideProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SideProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>
          }
          findFirst: {
            args: Prisma.SideProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SideProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>
          }
          findMany: {
            args: Prisma.SideProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>[]
          }
          create: {
            args: Prisma.SideProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>
          }
          createMany: {
            args: Prisma.SideProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SideProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>
          }
          update: {
            args: Prisma.SideProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>
          }
          deleteMany: {
            args: Prisma.SideProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SideProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SideProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SideProjectPayload>
          }
          aggregate: {
            args: Prisma.SideProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSideProject>
          }
          groupBy: {
            args: Prisma.SideProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SideProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SideProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<SideProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Experiences
   */

  export type AggregateExperiences = {
    _count: ExperiencesCountAggregateOutputType | null
    _avg: ExperiencesAvgAggregateOutputType | null
    _sum: ExperiencesSumAggregateOutputType | null
    _min: ExperiencesMinAggregateOutputType | null
    _max: ExperiencesMaxAggregateOutputType | null
  }

  export type ExperiencesAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperiencesSumAggregateOutputType = {
    id: number | null
  }

  export type ExperiencesMinAggregateOutputType = {
    id: number | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    company: string | null
  }

  export type ExperiencesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    company: string | null
  }

  export type ExperiencesCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    description: number
    company: number
    _all: number
  }


  export type ExperiencesAvgAggregateInputType = {
    id?: true
  }

  export type ExperiencesSumAggregateInputType = {
    id?: true
  }

  export type ExperiencesMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    description?: true
    company?: true
  }

  export type ExperiencesMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    description?: true
    company?: true
  }

  export type ExperiencesCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    description?: true
    company?: true
    _all?: true
  }

  export type ExperiencesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to aggregate.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperiencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperiencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperiencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperiencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperiencesMaxAggregateInputType
  }

  export type GetExperiencesAggregateType<T extends ExperiencesAggregateArgs> = {
        [P in keyof T & keyof AggregateExperiences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperiences[P]>
      : GetScalarType<T[P], AggregateExperiences[P]>
  }




  export type ExperiencesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExperiencesWhereInput
    orderBy?: ExperiencesOrderByWithAggregationInput | ExperiencesOrderByWithAggregationInput[]
    by: ExperiencesScalarFieldEnum[] | ExperiencesScalarFieldEnum
    having?: ExperiencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperiencesCountAggregateInputType | true
    _avg?: ExperiencesAvgAggregateInputType
    _sum?: ExperiencesSumAggregateInputType
    _min?: ExperiencesMinAggregateInputType
    _max?: ExperiencesMaxAggregateInputType
  }

  export type ExperiencesGroupByOutputType = {
    id: number
    title: string
    startDate: Date
    endDate: Date | null
    description: string
    company: string
    _count: ExperiencesCountAggregateOutputType | null
    _avg: ExperiencesAvgAggregateOutputType | null
    _sum: ExperiencesSumAggregateOutputType | null
    _min: ExperiencesMinAggregateOutputType | null
    _max: ExperiencesMaxAggregateOutputType | null
  }

  type GetExperiencesGroupByPayload<T extends ExperiencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperiencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperiencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperiencesGroupByOutputType[P]>
            : GetScalarType<T[P], ExperiencesGroupByOutputType[P]>
        }
      >
    >


  export type ExperiencesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    company?: boolean
  }, ExtArgs["result"]["experiences"]>

  export type ExperiencesSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    company?: boolean
  }


  export type $ExperiencesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Experiences"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      startDate: Date
      endDate: Date | null
      description: string
      company: string
    }, ExtArgs["result"]["experiences"]>
    composites: {}
  }


  type ExperiencesGetPayload<S extends boolean | null | undefined | ExperiencesDefaultArgs> = $Result.GetResult<Prisma.$ExperiencesPayload, S>

  type ExperiencesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExperiencesFindManyArgs, 'select' | 'include'> & {
      select?: ExperiencesCountAggregateInputType | true
    }

  export interface ExperiencesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experiences'], meta: { name: 'Experiences' } }
    /**
     * Find zero or one Experiences that matches the filter.
     * @param {ExperiencesFindUniqueArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExperiencesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesFindUniqueArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Experiences that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExperiencesFindUniqueOrThrowArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExperiencesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesFindFirstArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExperiencesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindFirstArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Experiences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesFindFirstOrThrowArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExperiencesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experiences.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experiences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experiencesWithIdOnly = await prisma.experiences.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExperiencesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Experiences.
     * @param {ExperiencesCreateArgs} args - Arguments to create a Experiences.
     * @example
     * // Create one Experiences
     * const Experiences = await prisma.experiences.create({
     *   data: {
     *     // ... data to create a Experiences
     *   }
     * })
     * 
    **/
    create<T extends ExperiencesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesCreateArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Experiences.
     *     @param {ExperiencesCreateManyArgs} args - Arguments to create many Experiences.
     *     @example
     *     // Create many Experiences
     *     const experiences = await prisma.experiences.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExperiencesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experiences.
     * @param {ExperiencesDeleteArgs} args - Arguments to delete one Experiences.
     * @example
     * // Delete one Experiences
     * const Experiences = await prisma.experiences.delete({
     *   where: {
     *     // ... filter to delete one Experiences
     *   }
     * })
     * 
    **/
    delete<T extends ExperiencesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesDeleteArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Experiences.
     * @param {ExperiencesUpdateArgs} args - Arguments to update one Experiences.
     * @example
     * // Update one Experiences
     * const experiences = await prisma.experiences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExperiencesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesUpdateArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {ExperiencesDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experiences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExperiencesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experiences = await prisma.experiences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExperiencesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experiences.
     * @param {ExperiencesUpsertArgs} args - Arguments to update or create a Experiences.
     * @example
     * // Update or create a Experiences
     * const experiences = await prisma.experiences.upsert({
     *   create: {
     *     // ... data to create a Experiences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experiences we want to update
     *   }
     * })
    **/
    upsert<T extends ExperiencesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesUpsertArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experiences.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperiencesCountArgs>(
      args?: Subset<T, ExperiencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperiencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperiencesAggregateArgs>(args: Subset<T, ExperiencesAggregateArgs>): Prisma.PrismaPromise<GetExperiencesAggregateType<T>>

    /**
     * Group by Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesGroupByArgs} args - Group by arguments.
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
      T extends ExperiencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperiencesGroupByArgs['orderBy'] }
        : { orderBy?: ExperiencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperiencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperiencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experiences model
   */
  readonly fields: ExperiencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experiences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperiencesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Experiences model
   */ 
  interface ExperiencesFieldRefs {
    readonly id: FieldRef<"Experiences", 'Int'>
    readonly title: FieldRef<"Experiences", 'String'>
    readonly startDate: FieldRef<"Experiences", 'DateTime'>
    readonly endDate: FieldRef<"Experiences", 'DateTime'>
    readonly description: FieldRef<"Experiences", 'String'>
    readonly company: FieldRef<"Experiences", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Experiences findUnique
   */
  export type ExperiencesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences findUniqueOrThrow
   */
  export type ExperiencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences findFirst
   */
  export type ExperiencesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * Experiences findFirstOrThrow
   */
  export type ExperiencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * Experiences findMany
   */
  export type ExperiencesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * Experiences create
   */
  export type ExperiencesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * The data needed to create a Experiences.
     */
    data: XOR<ExperiencesCreateInput, ExperiencesUncheckedCreateInput>
  }


  /**
   * Experiences createMany
   */
  export type ExperiencesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperiencesCreateManyInput | ExperiencesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Experiences update
   */
  export type ExperiencesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * The data needed to update a Experiences.
     */
    data: XOR<ExperiencesUpdateInput, ExperiencesUncheckedUpdateInput>
    /**
     * Choose, which Experiences to update.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences updateMany
   */
  export type ExperiencesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperiencesUpdateManyMutationInput, ExperiencesUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperiencesWhereInput
  }


  /**
   * Experiences upsert
   */
  export type ExperiencesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * The filter to search for the Experiences to update in case it exists.
     */
    where: ExperiencesWhereUniqueInput
    /**
     * In case the Experiences found by the `where` argument doesn't exist, create a new Experiences with this data.
     */
    create: XOR<ExperiencesCreateInput, ExperiencesUncheckedCreateInput>
    /**
     * In case the Experiences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperiencesUpdateInput, ExperiencesUncheckedUpdateInput>
  }


  /**
   * Experiences delete
   */
  export type ExperiencesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Filter which Experiences to delete.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences deleteMany
   */
  export type ExperiencesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperiencesWhereInput
  }


  /**
   * Experiences without action
   */
  export type ExperiencesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
  }



  /**
   * Model SideProject
   */

  export type AggregateSideProject = {
    _count: SideProjectCountAggregateOutputType | null
    _avg: SideProjectAvgAggregateOutputType | null
    _sum: SideProjectSumAggregateOutputType | null
    _min: SideProjectMinAggregateOutputType | null
    _max: SideProjectMaxAggregateOutputType | null
  }

  export type SideProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type SideProjectSumAggregateOutputType = {
    id: number | null
  }

  export type SideProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    url: string | null
    photo: string | null
  }

  export type SideProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    url: string | null
    photo: string | null
  }

  export type SideProjectCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    description: number
    url: number
    photo: number
    _all: number
  }


  export type SideProjectAvgAggregateInputType = {
    id?: true
  }

  export type SideProjectSumAggregateInputType = {
    id?: true
  }

  export type SideProjectMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    url?: true
    photo?: true
  }

  export type SideProjectMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    url?: true
    photo?: true
  }

  export type SideProjectCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    url?: true
    photo?: true
    _all?: true
  }

  export type SideProjectAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SideProject to aggregate.
     */
    where?: SideProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideProjects to fetch.
     */
    orderBy?: SideProjectOrderByWithRelationInput | SideProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SideProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SideProjects
    **/
    _count?: true | SideProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SideProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SideProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SideProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SideProjectMaxAggregateInputType
  }

  export type GetSideProjectAggregateType<T extends SideProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSideProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSideProject[P]>
      : GetScalarType<T[P], AggregateSideProject[P]>
  }




  export type SideProjectGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SideProjectWhereInput
    orderBy?: SideProjectOrderByWithAggregationInput | SideProjectOrderByWithAggregationInput[]
    by: SideProjectScalarFieldEnum[] | SideProjectScalarFieldEnum
    having?: SideProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SideProjectCountAggregateInputType | true
    _avg?: SideProjectAvgAggregateInputType
    _sum?: SideProjectSumAggregateInputType
    _min?: SideProjectMinAggregateInputType
    _max?: SideProjectMaxAggregateInputType
  }

  export type SideProjectGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date | null
    description: string
    url: string | null
    photo: string | null
    _count: SideProjectCountAggregateOutputType | null
    _avg: SideProjectAvgAggregateOutputType | null
    _sum: SideProjectSumAggregateOutputType | null
    _min: SideProjectMinAggregateOutputType | null
    _max: SideProjectMaxAggregateOutputType | null
  }

  type GetSideProjectGroupByPayload<T extends SideProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SideProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SideProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SideProjectGroupByOutputType[P]>
            : GetScalarType<T[P], SideProjectGroupByOutputType[P]>
        }
      >
    >


  export type SideProjectSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    url?: boolean
    photo?: boolean
  }, ExtArgs["result"]["sideProject"]>

  export type SideProjectSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    url?: boolean
    photo?: boolean
  }


  export type $SideProjectPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SideProject"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date | null
      description: string
      url: string | null
      photo: string | null
    }, ExtArgs["result"]["sideProject"]>
    composites: {}
  }


  type SideProjectGetPayload<S extends boolean | null | undefined | SideProjectDefaultArgs> = $Result.GetResult<Prisma.$SideProjectPayload, S>

  type SideProjectCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SideProjectFindManyArgs, 'select' | 'include'> & {
      select?: SideProjectCountAggregateInputType | true
    }

  export interface SideProjectDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SideProject'], meta: { name: 'SideProject' } }
    /**
     * Find zero or one SideProject that matches the filter.
     * @param {SideProjectFindUniqueArgs} args - Arguments to find a SideProject
     * @example
     * // Get one SideProject
     * const sideProject = await prisma.sideProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SideProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SideProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SideProject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SideProjectFindUniqueOrThrowArgs} args - Arguments to find a SideProject
     * @example
     * // Get one SideProject
     * const sideProject = await prisma.sideProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SideProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SideProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SideProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectFindFirstArgs} args - Arguments to find a SideProject
     * @example
     * // Get one SideProject
     * const sideProject = await prisma.sideProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SideProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SideProjectFindFirstArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SideProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectFindFirstOrThrowArgs} args - Arguments to find a SideProject
     * @example
     * // Get one SideProject
     * const sideProject = await prisma.sideProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SideProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SideProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SideProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SideProjects
     * const sideProjects = await prisma.sideProject.findMany()
     * 
     * // Get first 10 SideProjects
     * const sideProjects = await prisma.sideProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sideProjectWithIdOnly = await prisma.sideProject.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SideProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SideProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SideProject.
     * @param {SideProjectCreateArgs} args - Arguments to create a SideProject.
     * @example
     * // Create one SideProject
     * const SideProject = await prisma.sideProject.create({
     *   data: {
     *     // ... data to create a SideProject
     *   }
     * })
     * 
    **/
    create<T extends SideProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SideProjectCreateArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SideProjects.
     *     @param {SideProjectCreateManyArgs} args - Arguments to create many SideProjects.
     *     @example
     *     // Create many SideProjects
     *     const sideProject = await prisma.sideProject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SideProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SideProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SideProject.
     * @param {SideProjectDeleteArgs} args - Arguments to delete one SideProject.
     * @example
     * // Delete one SideProject
     * const SideProject = await prisma.sideProject.delete({
     *   where: {
     *     // ... filter to delete one SideProject
     *   }
     * })
     * 
    **/
    delete<T extends SideProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SideProjectDeleteArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SideProject.
     * @param {SideProjectUpdateArgs} args - Arguments to update one SideProject.
     * @example
     * // Update one SideProject
     * const sideProject = await prisma.sideProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SideProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SideProjectUpdateArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SideProjects.
     * @param {SideProjectDeleteManyArgs} args - Arguments to filter SideProjects to delete.
     * @example
     * // Delete a few SideProjects
     * const { count } = await prisma.sideProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SideProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SideProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SideProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SideProjects
     * const sideProject = await prisma.sideProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SideProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SideProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SideProject.
     * @param {SideProjectUpsertArgs} args - Arguments to update or create a SideProject.
     * @example
     * // Update or create a SideProject
     * const sideProject = await prisma.sideProject.upsert({
     *   create: {
     *     // ... data to create a SideProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SideProject we want to update
     *   }
     * })
    **/
    upsert<T extends SideProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SideProjectUpsertArgs<ExtArgs>>
    ): Prisma__SideProjectClient<$Result.GetResult<Prisma.$SideProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SideProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectCountArgs} args - Arguments to filter SideProjects to count.
     * @example
     * // Count the number of SideProjects
     * const count = await prisma.sideProject.count({
     *   where: {
     *     // ... the filter for the SideProjects we want to count
     *   }
     * })
    **/
    count<T extends SideProjectCountArgs>(
      args?: Subset<T, SideProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SideProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SideProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SideProjectAggregateArgs>(args: Subset<T, SideProjectAggregateArgs>): Prisma.PrismaPromise<GetSideProjectAggregateType<T>>

    /**
     * Group by SideProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideProjectGroupByArgs} args - Group by arguments.
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
      T extends SideProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SideProjectGroupByArgs['orderBy'] }
        : { orderBy?: SideProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SideProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSideProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SideProject model
   */
  readonly fields: SideProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SideProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SideProjectClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SideProject model
   */ 
  interface SideProjectFieldRefs {
    readonly id: FieldRef<"SideProject", 'Int'>
    readonly name: FieldRef<"SideProject", 'String'>
    readonly startDate: FieldRef<"SideProject", 'DateTime'>
    readonly endDate: FieldRef<"SideProject", 'DateTime'>
    readonly description: FieldRef<"SideProject", 'String'>
    readonly url: FieldRef<"SideProject", 'String'>
    readonly photo: FieldRef<"SideProject", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SideProject findUnique
   */
  export type SideProjectFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * Filter, which SideProject to fetch.
     */
    where: SideProjectWhereUniqueInput
  }


  /**
   * SideProject findUniqueOrThrow
   */
  export type SideProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * Filter, which SideProject to fetch.
     */
    where: SideProjectWhereUniqueInput
  }


  /**
   * SideProject findFirst
   */
  export type SideProjectFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * Filter, which SideProject to fetch.
     */
    where?: SideProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideProjects to fetch.
     */
    orderBy?: SideProjectOrderByWithRelationInput | SideProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SideProjects.
     */
    cursor?: SideProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SideProjects.
     */
    distinct?: SideProjectScalarFieldEnum | SideProjectScalarFieldEnum[]
  }


  /**
   * SideProject findFirstOrThrow
   */
  export type SideProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * Filter, which SideProject to fetch.
     */
    where?: SideProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideProjects to fetch.
     */
    orderBy?: SideProjectOrderByWithRelationInput | SideProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SideProjects.
     */
    cursor?: SideProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SideProjects.
     */
    distinct?: SideProjectScalarFieldEnum | SideProjectScalarFieldEnum[]
  }


  /**
   * SideProject findMany
   */
  export type SideProjectFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * Filter, which SideProjects to fetch.
     */
    where?: SideProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideProjects to fetch.
     */
    orderBy?: SideProjectOrderByWithRelationInput | SideProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SideProjects.
     */
    cursor?: SideProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideProjects.
     */
    skip?: number
    distinct?: SideProjectScalarFieldEnum | SideProjectScalarFieldEnum[]
  }


  /**
   * SideProject create
   */
  export type SideProjectCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * The data needed to create a SideProject.
     */
    data: XOR<SideProjectCreateInput, SideProjectUncheckedCreateInput>
  }


  /**
   * SideProject createMany
   */
  export type SideProjectCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SideProjects.
     */
    data: SideProjectCreateManyInput | SideProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SideProject update
   */
  export type SideProjectUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * The data needed to update a SideProject.
     */
    data: XOR<SideProjectUpdateInput, SideProjectUncheckedUpdateInput>
    /**
     * Choose, which SideProject to update.
     */
    where: SideProjectWhereUniqueInput
  }


  /**
   * SideProject updateMany
   */
  export type SideProjectUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SideProjects.
     */
    data: XOR<SideProjectUpdateManyMutationInput, SideProjectUncheckedUpdateManyInput>
    /**
     * Filter which SideProjects to update
     */
    where?: SideProjectWhereInput
  }


  /**
   * SideProject upsert
   */
  export type SideProjectUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * The filter to search for the SideProject to update in case it exists.
     */
    where: SideProjectWhereUniqueInput
    /**
     * In case the SideProject found by the `where` argument doesn't exist, create a new SideProject with this data.
     */
    create: XOR<SideProjectCreateInput, SideProjectUncheckedCreateInput>
    /**
     * In case the SideProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SideProjectUpdateInput, SideProjectUncheckedUpdateInput>
  }


  /**
   * SideProject delete
   */
  export type SideProjectDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
    /**
     * Filter which SideProject to delete.
     */
    where: SideProjectWhereUniqueInput
  }


  /**
   * SideProject deleteMany
   */
  export type SideProjectDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SideProjects to delete
     */
    where?: SideProjectWhereInput
  }


  /**
   * SideProject without action
   */
  export type SideProjectDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideProject
     */
    select?: SideProjectSelect<ExtArgs> | null
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


  export const ExperiencesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    company: 'company'
  };

  export type ExperiencesScalarFieldEnum = (typeof ExperiencesScalarFieldEnum)[keyof typeof ExperiencesScalarFieldEnum]


  export const SideProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    url: 'url',
    photo: 'photo'
  };

  export type SideProjectScalarFieldEnum = (typeof SideProjectScalarFieldEnum)[keyof typeof SideProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ExperiencesWhereInput = {
    AND?: ExperiencesWhereInput | ExperiencesWhereInput[]
    OR?: ExperiencesWhereInput[]
    NOT?: ExperiencesWhereInput | ExperiencesWhereInput[]
    id?: IntFilter<"Experiences"> | number
    title?: StringFilter<"Experiences"> | string
    startDate?: DateTimeFilter<"Experiences"> | Date | string
    endDate?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    description?: StringFilter<"Experiences"> | string
    company?: StringFilter<"Experiences"> | string
  }

  export type ExperiencesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    company?: SortOrder
  }

  export type ExperiencesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperiencesWhereInput | ExperiencesWhereInput[]
    OR?: ExperiencesWhereInput[]
    NOT?: ExperiencesWhereInput | ExperiencesWhereInput[]
    title?: StringFilter<"Experiences"> | string
    startDate?: DateTimeFilter<"Experiences"> | Date | string
    endDate?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    description?: StringFilter<"Experiences"> | string
    company?: StringFilter<"Experiences"> | string
  }, "id">

  export type ExperiencesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    company?: SortOrder
    _count?: ExperiencesCountOrderByAggregateInput
    _avg?: ExperiencesAvgOrderByAggregateInput
    _max?: ExperiencesMaxOrderByAggregateInput
    _min?: ExperiencesMinOrderByAggregateInput
    _sum?: ExperiencesSumOrderByAggregateInput
  }

  export type ExperiencesScalarWhereWithAggregatesInput = {
    AND?: ExperiencesScalarWhereWithAggregatesInput | ExperiencesScalarWhereWithAggregatesInput[]
    OR?: ExperiencesScalarWhereWithAggregatesInput[]
    NOT?: ExperiencesScalarWhereWithAggregatesInput | ExperiencesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experiences"> | number
    title?: StringWithAggregatesFilter<"Experiences"> | string
    startDate?: DateTimeWithAggregatesFilter<"Experiences"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experiences"> | Date | string | null
    description?: StringWithAggregatesFilter<"Experiences"> | string
    company?: StringWithAggregatesFilter<"Experiences"> | string
  }

  export type SideProjectWhereInput = {
    AND?: SideProjectWhereInput | SideProjectWhereInput[]
    OR?: SideProjectWhereInput[]
    NOT?: SideProjectWhereInput | SideProjectWhereInput[]
    id?: IntFilter<"SideProject"> | number
    name?: StringFilter<"SideProject"> | string
    startDate?: DateTimeFilter<"SideProject"> | Date | string
    endDate?: DateTimeNullableFilter<"SideProject"> | Date | string | null
    description?: StringFilter<"SideProject"> | string
    url?: StringNullableFilter<"SideProject"> | string | null
    photo?: StringNullableFilter<"SideProject"> | string | null
  }

  export type SideProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    url?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
  }

  export type SideProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SideProjectWhereInput | SideProjectWhereInput[]
    OR?: SideProjectWhereInput[]
    NOT?: SideProjectWhereInput | SideProjectWhereInput[]
    name?: StringFilter<"SideProject"> | string
    startDate?: DateTimeFilter<"SideProject"> | Date | string
    endDate?: DateTimeNullableFilter<"SideProject"> | Date | string | null
    description?: StringFilter<"SideProject"> | string
    url?: StringNullableFilter<"SideProject"> | string | null
    photo?: StringNullableFilter<"SideProject"> | string | null
  }, "id">

  export type SideProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    url?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: SideProjectCountOrderByAggregateInput
    _avg?: SideProjectAvgOrderByAggregateInput
    _max?: SideProjectMaxOrderByAggregateInput
    _min?: SideProjectMinOrderByAggregateInput
    _sum?: SideProjectSumOrderByAggregateInput
  }

  export type SideProjectScalarWhereWithAggregatesInput = {
    AND?: SideProjectScalarWhereWithAggregatesInput | SideProjectScalarWhereWithAggregatesInput[]
    OR?: SideProjectScalarWhereWithAggregatesInput[]
    NOT?: SideProjectScalarWhereWithAggregatesInput | SideProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SideProject"> | number
    name?: StringWithAggregatesFilter<"SideProject"> | string
    startDate?: DateTimeWithAggregatesFilter<"SideProject"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"SideProject"> | Date | string | null
    description?: StringWithAggregatesFilter<"SideProject"> | string
    url?: StringNullableWithAggregatesFilter<"SideProject"> | string | null
    photo?: StringNullableWithAggregatesFilter<"SideProject"> | string | null
  }

  export type ExperiencesCreateInput = {
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    company: string
  }

  export type ExperiencesUncheckedCreateInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    company: string
  }

  export type ExperiencesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type ExperiencesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type ExperiencesCreateManyInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    company: string
  }

  export type ExperiencesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type ExperiencesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type SideProjectCreateInput = {
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    url?: string | null
    photo?: string | null
  }

  export type SideProjectUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    url?: string | null
    photo?: string | null
  }

  export type SideProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SideProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SideProjectCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    url?: string | null
    photo?: string | null
  }

  export type SideProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SideProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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

  export type ExperiencesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    company?: SortOrder
  }

  export type ExperiencesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperiencesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    company?: SortOrder
  }

  export type ExperiencesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    company?: SortOrder
  }

  export type ExperiencesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SideProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    url?: SortOrder
    photo?: SortOrder
  }

  export type SideProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SideProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    url?: SortOrder
    photo?: SortOrder
  }

  export type SideProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    url?: SortOrder
    photo?: SortOrder
  }

  export type SideProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ExperiencesDefaultArgs instead
     */
    export type ExperiencesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ExperiencesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SideProjectDefaultArgs instead
     */
    export type SideProjectArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SideProjectDefaultArgs<ExtArgs>

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