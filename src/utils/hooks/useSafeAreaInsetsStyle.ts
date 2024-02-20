import {Edge, useSafeAreaInsets} from 'react-native-safe-area-context';

export type ExtendedEdge = Edge | 'start' | 'end';

const propertySuffixMap = {
  top: 'Top',
  bottom: 'Bottom',
  left: 'Start',
  right: 'End',
  start: 'Start',
  end: 'End',
};

const edgeInsetMap: Record<string, Edge> = {
  start: 'left',
  end: 'right',
};

export type SafeAreaInsetsStyle<
  Property extends 'padding' | 'margin' = 'padding',
  Edges extends Array<ExtendedEdge> = Array<ExtendedEdge>,
> = {
  [K in Edges[number] as `${Property}${Capitalize<K>}`]: number;
};

/**
 * A hook that can be used to create a safe-area-aware style object that can be passed directly to a View.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/utility/useSafeAreaInsetsStyle/}
 * @param {ExtendedEdge[]} safeAreaEdges - The edges to apply the safe area insets to.
 * @param {"padding" | "margin"} property - The property to apply the safe area insets to.
 * @returns {SafeAreaInsetsStyle<Property, Edges>} - The style object with the safe area insets applied.
 */
export function useSafeAreaInsetsStyle<
  Property extends 'padding' | 'margin' = 'padding',
  Edges extends Array<ExtendedEdge> = [],
>(
  safeAreaEdges: Edges = [] as unknown as Edges,
  property: Property = 'padding' as Property,
): SafeAreaInsetsStyle<Property, Edges> {
  const insets = useSafeAreaInsets();

  return safeAreaEdges.reduce((acc, e) => {
    /**
     * Determines the correct edge for safe area insets.
     * If `e` is 'start' or 'end', maps it to 'left' or 'right' respectively for LTR layouts.
     * Falls back to `e` if it's already a standard edge ('top', 'bottom', 'left', 'right').
     * @param {ExtendedEdge} e - The edge to adjust for safe area insets.
     * @returns {Edge} The standard edge or the adjusted edge for LTR layouts.
     */
    const value = edgeInsetMap[e] ?? e;

    /**
     * Adds a new property to the accumulated style object based on the specified edge.
     * The property name is dynamically generated from the `property` (padding/margin) and the edge.
     * The value is the safe area inset for the specified edge, ensuring the UI respects device safe areas.
     *
     * @param {Object} acc - The accumulator object containing the accumulated styles.
     * @param {ExtendedEdge} e - The current edge being processed.
     * @returns {Object} An updated style object with the new safe area inset property added.
     */
    return {...acc, [`${property}${propertySuffixMap[e]}`]: insets[value]};
  }, {}) as SafeAreaInsetsStyle<Property, Edges>;
}
