import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
    Circle,
    Ellipsis,
    Heart,
    MessageCircle,
    Repeat,
    Send,
    Bookmark,
} from 'lucide-react-native';

import ActionButton from './ActionButton';
import PostImage from './PostImage';

/**
 * Props
 *  username  string
 *  avatar    require(...) or { uri } (optional, shows a placeholder if missing)
 *  image     require(...) or { uri }
 *  likes, comments, shares, reposts   numbers (a count is hidden if undefined)
 *  onLike, onComment, onShare, onRepost, onSave, onMore   handlers (optional)
 */
const Post = ({
    username,
    avatar,
    image,
    likes,
    comments,
    reposts,
    shares,
    onLike,
    onComment,
    onRepost,
    onShare,
    onSave,
    onMore,
}) => (
    <View style={styles.post}>
        <View style={styles.header}>
            {avatar ? (
                <Image source={avatar} style={styles.avatar} />
            ) : (
                <Circle size={30} color="black" />
            )}
            <Text style={styles.username}>{username}</Text>
            <ActionButton icon={Ellipsis} onPress={onMore} label="More options" />
        </View>

        <PostImage source={image} />

        <View style={styles.footer}>
            <View style={styles.actionsLeft}>
                <ActionButton icon={Heart} count={likes} onPress={onLike} label="Like" />
                <ActionButton icon={MessageCircle} count={comments} onPress={onComment} label="Comment" />
                {reposts !== undefined && (
                    <ActionButton icon={Repeat} count={reposts} onPress={onRepost} label="Repost" />
                )}
                <ActionButton icon={Send} count={shares} onPress={onShare} label="Share" />
            </View>
            <ActionButton icon={Bookmark} onPress={onSave} label="Save" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    post: {
        width: '100%',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    username: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    actionsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
});

export default React.memo(Post);