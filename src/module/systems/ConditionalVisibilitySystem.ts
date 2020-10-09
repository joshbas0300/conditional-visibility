import { ConditionalVisibility } from "../ConditionalVisibility";

/**
 * A ConditionalVisibilitySystem abstracts the parameters that would be specific to a game system, e.g. dnd5e might use stealth
 * and passive perception, whereas starfinder may use another setup.
 */
export interface ConditionalVisibilitySystem {
    
    /**
     * The game system id this visiblity system should be used for
     */
    gameSystemId(): string;

    /**
     * A map of icon urls to a condition name.
     */
    effects(): Map<String, String>;

    /**
     * Initizialize status effects for the system.
     */
    initializeStatusEffects(): void;

    /**
     * Recalculate the visible status from the token.  Called in response to a token update, this
     * should set flags in the proper namespace for quick comparison when drawing the sightLayer.
     * @param token the token whose status to modify
     * @param update the update being made
     */
    recalculateVisibleStatus(token: any, update: any);

    /**
     * Get the vision capabilities of the combined list of tokens provided.
     * @param srcTokens the tokens whose vision is tested
     * @return an object containing flags for conditions that will be passed to canSee
     */
    getVisionCapabilities(srcTokens: Token[]):any

    /**
     * Check to see if a target token can be seen by an object containing sight capabilities.
     * @param target the token to be seen
     * @param visionCapabilities the capabilities of the observing sightLayer
     * @returns true if the token can be seen on the sightLayer, false otherwise
     */
    canSee(target:Token, visionCapabilities: any):boolean;

    /**
     * Initialize any behaviors to occur when an effect is toggled.
     * @param tokenHud the tokenHud where the effects are toggled
     */
    initializeOnToggleEffect(tokenHud: any): void
}
