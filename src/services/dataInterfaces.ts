export type IJokes = Array<IJoke>

export interface IJoke {
    id: number,
    punchline: string,
    setup: string,
    type: string
}