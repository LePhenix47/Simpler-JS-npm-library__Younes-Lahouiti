/**
 * Plays the media element
 * @param {HTMLVideoElement} media - The HTML media element to be played
 */
export declare function playMedia(media: HTMLVideoElement | HTMLAudioElement): void;
/**
 * Pauses the media element
 * @param {HTMLVideoElement} media - The HTML media element to be paused
 */
export declare function pauseMedia(media: HTMLVideoElement | HTMLAudioElement): void;
/**
 * Sets the volume of a media element
 * @param {HTMLVideoElement} media - The media element to set the volume for
 * @param {number} volume - The volume level to set (between 0 and 1)
 */
export declare function setVideoVolume(media: HTMLVideoElement | HTMLAudioElement, volume: number): void;
/**
 * Mutes the volume of a media element
 * @param {HTMLVideoElement} media - The media element to set the volume for
 *
 */
export declare function muteVolume(media: HTMLVideoElement | HTMLAudioElement): void;
/**
 * Sets to a specific timestamp in a media element
 * @param {HTMLVideoElement} media - The media element to seek
 * @param {number} time - The time to seek to (in seconds)
 */
export declare function setTimeMedia(media: HTMLVideoElement | HTMLAudioElement, time: number): void;
/**
 * Returns the current time (in seconds) of a media element
 * @param {HTMLVideoElement} media - The media element to get the current time from
 * @returns {number} The current time of the media element (in seconds)
 */
export declare function getMediaCurrentTime(media: HTMLVideoElement | HTMLAudioElement): number;
/**
 * Gets the duration of a media file in seconds
 *
 * @param {HTMLVideoElement} media - The media element to get the duration from
 * @returns {number} The duration of the media file in seconds (returns 0 if it's not available)
 */
export declare function getMediaTotalTime(media: HTMLVideoElement | HTMLAudioElement): number;
/**
 * Sets the playback speed of a media element.
 *
 * @param {HTMLVideoElement} media - The media element.
 * @param {number} newPlaybackRate - The new playback rate to set for the media.
 * A value of 1.0 represents normal speed. Values less than 1.0 slow down the playback,
 * while values greater than 1.0 speed it up.
 *
 * **The playback rate should be within the range of 0.5 to 2.0** for most browsers, but actual
 * limits may vary depending on the browser and media codec support.
 * @returns {void}
 */
export declare function setMediaSpeed(media: HTMLVideoElement | HTMLAudioElement, newPlaybackRate: number): void;
/**
 * Checks if a media element has paused
 * @param {HTMLVideoElement} media - The HTMLVideoElement to check
 * @returns Boolean value telling whether or not the media is paused
 */
export declare function checkIfMediaPaused(media: HTMLVideoElement | HTMLAudioElement): boolean;
/**
 * Checks if a media element has ended
 * @param {HTMLVideoElement} media - The HTMLVideoElement to check
 * @returns Boolean value telling whether or not the media has ended
 */
export declare function checkIfMediaEnded(media: HTMLVideoElement | HTMLAudioElement): boolean;
/**
 * Formats a given amount of seconds into a time object containing formatted hours, minutes and seconds
 * If the time is over an hour but under 10 minutes, the minutes are also formatted
 *
 * @param {number} seconds - The amount of seconds to format
 * @returns {{seconds: string, minutes: string, hours: string}} - A time object containing formatted hours, minutes and seconds
 */
export declare function formatTimeValues(seconds: number): {
    seconds: string;
    minutes: string;
    hours: string;
};
