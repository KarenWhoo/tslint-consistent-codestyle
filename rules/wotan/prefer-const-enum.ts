import { wrapTslintRule } from '@fimbul/bifrost';
import { Rule } from '../preferConstEnumRule';

const rule = wrapTslintRule(Rule);
export {rule as Rule};
