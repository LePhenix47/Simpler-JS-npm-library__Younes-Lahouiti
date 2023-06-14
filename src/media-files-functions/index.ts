/**
 * Plays the media element
 * @param {HTMLVideoElement} media - The HTML media element to be played
 */
export function playMedia(media: HTMLVideoElement | HTMLAudioElement): void {
  media.play();
}

/**
 * Pauses the media element
 * @param {HTMLVideoElement} media - The HTML media element to be paused
 */
export function pauseMedia(media: HTMLVideoElement | HTMLAudioElement): void {
  media.pause();
}

/**
 * Sets the volume of a media element
 * @param {HTMLVideoElement} media - The media element to set the volume for
 * @param {number} volume - The volume level to set (between 0 and 1)
 */
export function setVideoVolume(
  media: HTMLVideoElement | HTMLAudioElement,
  volume: number
): void {
  media.volume = volume;
}

/**
 * Mutes the volume of a media element
 * @param {HTMLVideoElement} media - The media element to set the volume for
 *
 */
export function muteVolume(media: HTMLVideoElement | HTMLAudioElement): void {
  media.muted = true;
}

/**
 * Sets to a specific timestamp in a media element
 * @param {HTMLVideoElement} media - The media element to seek
 * @param {number} time - The time to seek to (in seconds)
 */
export function setTimeMedia(
  media: HTMLVideoElement | HTMLAudioElement,
  time: number
): void {
  media.currentTime = time;
}

/**
 * Returns the current time (in seconds) of a media element
 * @param {HTMLVideoElement} media - The media element to get the current time from
 * @returns {number} The current time of the media element (in seconds)
 */
export function getMediaCurrentTime(
  media: HTMLVideoElement | HTMLAudioElement
): number {
  return media.currentTime;
}

/**
 * Gets the duration of a media file in seconds
 *
 * @param {HTMLVideoElement} media - The media element to get the duration from
 * @returns {number} The duration of the media file in seconds (returns 0 if it's not available)
 */
export function getMediaTotalTime(
  media: HTMLVideoElement | HTMLAudioElement
): number {
  return media.duration;
}
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
export function setMediaSpeed(
  media: HTMLVideoElement | HTMLAudioElement,
  newPlaybackRate: number
): void {
  media.playbackRate = newPlaybackRate;
}

/**
 * Checks if a media element has paused
 * @param {HTMLVideoElement} media - The HTMLVideoElement to check
 * @returns Boolean value telling whether or not the media is paused
 */
export function checkIfMediaPaused(
  media: HTMLVideoElement | HTMLAudioElement
): boolean {
  return media.paused;
}

/**
 * Checks if a media element has ended
 * @param {HTMLVideoElement} media - The HTMLVideoElement to check
 * @returns Boolean value telling whether or not the media has ended
 */
export function checkIfMediaEnded(
  media: HTMLVideoElement | HTMLAudioElement
): boolean {
  return media.ended;
}

/**
 * Formats a given amount of seconds into a time object containing formatted hours, minutes and seconds
 * If the time is over an hour but under 10 minutes, the minutes are also formatted
 *
 * @param {number} seconds - The amount of seconds to format
 * @returns {{seconds: string, minutes: string, hours: string}} - A time object containing formatted hours, minutes and seconds
 */
export function formatTimeValues(seconds: number): {
  seconds: string;
  minutes: string;
  hours: string;
} {
  // Calculate the unformatted minutes and seconds
  const unformattedSeconds: number = Math.trunc(seconds % 60);
  const unformattedMinutes: number = Math.trunc((seconds / 60) % 60);
  const unformattedHours: number = Math.trunc(seconds / 3_600);

  // Format the seconds
  const formattedSeconds: string =
    unformattedSeconds >= 10
      ? unformattedSeconds.toString()
      : `0${unformattedSeconds}`;

  // Format the minutes
  let formattedMinutes: string = unformattedMinutes.toString();

  //Format the hours
  const formattedHours: string = unformattedHours.toString();

  // Check if the time's hour is over an hour and has minutes under 10 minutes
  const isOverAnHour: boolean = unformattedHours > 0;
  const isUnderTenMinutes: boolean = unformattedMinutes < 10;

  // If the time is over an hour but under 10 minutes, format the minutes
  if (isOverAnHour && isUnderTenMinutes) {
    formattedMinutes =
      unformattedMinutes > 10
        ? unformattedMinutes.toString()
        : `0${unformattedMinutes}`;
  }
  // Return the formatted time object
  return {
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
  };
}
