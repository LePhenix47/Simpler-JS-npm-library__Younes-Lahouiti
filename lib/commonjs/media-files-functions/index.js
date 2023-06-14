"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimeValues = exports.checkIfMediaEnded = exports.checkIfMediaPaused = exports.setMediaSpeed = exports.getMediaTotalTime = exports.getMediaCurrentTime = exports.setTimeMedia = exports.muteVolume = exports.setVideoVolume = exports.pauseMedia = exports.playMedia = void 0;
/**
 * Plays the media element
 * @param {HTMLVideoElement} media - The HTML media element to be played
 */
function playMedia(media) {
    media.play();
}
exports.playMedia = playMedia;
/**
 * Pauses the media element
 * @param {HTMLVideoElement} media - The HTML media element to be paused
 */
function pauseMedia(media) {
    media.pause();
}
exports.pauseMedia = pauseMedia;
/**
 * Sets the volume of a media element
 * @param {HTMLVideoElement} media - The media element to set the volume for
 * @param {number} volume - The volume level to set (between 0 and 1)
 */
function setVideoVolume(media, volume) {
    media.volume = volume;
}
exports.setVideoVolume = setVideoVolume;
/**
 * Mutes the volume of a media element
 * @param {HTMLVideoElement} media - The media element to set the volume for
 *
 */
function muteVolume(media) {
    media.muted = true;
}
exports.muteVolume = muteVolume;
/**
 * Sets to a specific timestamp in a media element
 * @param {HTMLVideoElement} media - The media element to seek
 * @param {number} time - The time to seek to (in seconds)
 */
function setTimeMedia(media, time) {
    media.currentTime = time;
}
exports.setTimeMedia = setTimeMedia;
/**
 * Returns the current time (in seconds) of a media element
 * @param {HTMLVideoElement} media - The media element to get the current time from
 * @returns {number} The current time of the media element (in seconds)
 */
function getMediaCurrentTime(media) {
    return media.currentTime;
}
exports.getMediaCurrentTime = getMediaCurrentTime;
/**
 * Gets the duration of a media file in seconds
 *
 * @param {HTMLVideoElement} media - The media element to get the duration from
 * @returns {number} The duration of the media file in seconds (returns 0 if it's not available)
 */
function getMediaTotalTime(media) {
    return media.duration;
}
exports.getMediaTotalTime = getMediaTotalTime;
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
function setMediaSpeed(media, newPlaybackRate) {
    media.playbackRate = newPlaybackRate;
}
exports.setMediaSpeed = setMediaSpeed;
/**
 * Checks if a media element has paused
 * @param {HTMLVideoElement} media - The HTMLVideoElement to check
 * @returns Boolean value telling whether or not the media is paused
 */
function checkIfMediaPaused(media) {
    return media.paused;
}
exports.checkIfMediaPaused = checkIfMediaPaused;
/**
 * Checks if a media element has ended
 * @param {HTMLVideoElement} media - The HTMLVideoElement to check
 * @returns Boolean value telling whether or not the media has ended
 */
function checkIfMediaEnded(media) {
    return media.ended;
}
exports.checkIfMediaEnded = checkIfMediaEnded;
/**
 * Formats a given amount of seconds into a time object containing formatted hours, minutes and seconds
 * If the time is over an hour but under 10 minutes, the minutes are also formatted
 *
 * @param {number} seconds - The amount of seconds to format
 * @returns {{seconds: string, minutes: string, hours: string}} - A time object containing formatted hours, minutes and seconds
 */
function formatTimeValues(seconds) {
    // Calculate the unformatted minutes and seconds
    var unformattedSeconds = Math.trunc(seconds % 60);
    var unformattedMinutes = Math.trunc((seconds / 60) % 60);
    var unformattedHours = Math.trunc(seconds / 3600);
    // Format the seconds
    var formattedSeconds = unformattedSeconds >= 10
        ? unformattedSeconds.toString()
        : "0".concat(unformattedSeconds);
    // Format the minutes
    var formattedMinutes = unformattedMinutes.toString();
    //Format the hours
    var formattedHours = unformattedHours.toString();
    // Check if the time's hour is over an hour and has minutes under 10 minutes
    var isOverAnHour = unformattedHours > 0;
    var isUnderTenMinutes = unformattedMinutes < 10;
    // If the time is over an hour but under 10 minutes, format the minutes
    if (isOverAnHour && isUnderTenMinutes) {
        formattedMinutes =
            unformattedMinutes > 10
                ? unformattedMinutes.toString()
                : "0".concat(unformattedMinutes);
    }
    // Return the formatted time object
    return {
        hours: formattedHours,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
    };
}
exports.formatTimeValues = formatTimeValues;
