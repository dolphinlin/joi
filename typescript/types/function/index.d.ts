import {ObjectSchema} from "../object";

export interface FunctionSchema extends ObjectSchema {
    /**
     * Specifies the arity of the function where:
     * @param n - the arity expected.
     */
    arity(n: number): this;

    /**
     * Specifies the minimal arity of the function where:
     * @param n - the minimal arity expected.
     */
    minArity(n: number): this;

    /**
     * Specifies the minimal arity of the function where:
     * @param n - the minimal arity expected.
     */
    maxArity(n: number): this;

    /**
     * Requires the function to be a Joi reference.
     */
    ref(): this;
}