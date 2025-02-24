export interface e621PostData {
    id: number;
    created_at: string;
    updated_at: string;
    file: {
        width: number;
        height: number;
        ext: string;
        size: number;
        md5: string;
        url: string;
    };
    preview: {
        width: number;
        height: number;
        url: string;
    };
    sample: {
        has: boolean;
        height: number;
        width: number;
        url: string;
        alternates: Record<string, {
            type: string;
            height: number;
            width: number;
            urls: Array<string | null>;
        }>;
    };
    score: Record<"up" | "down" | "total", number>;
    tags: Record<"general" | "species" | "character" | "copyright" | "artist" | "invalid" | "lore" | "meta", Array<string>>;
    locked_tags: Array<string>;
    change_seq: number;
    flags: Record<"pending" | "flagged" | "note_locked" | "status_locked" | "rating_locked" | "deleted", boolean>;
    fav_count: number;
    sources: Array<string>;
    pools: Array<number>;
    relationships: {
        parent_id: number | null;
        has_children: boolean;
        has_active_children: boolean;
        children: Array<number>;
    };
    approver_id: number | null;
    uploader_id: number;
    description: string;
    comment_count: number;
    is_favorited: boolean;
    has_notes: boolean;
    duration: number | null;
}

export interface e621JSON{
    posts: Array<e621PostData>;
}
export interface e621RandomJSON{
    post: e621PostData;
}