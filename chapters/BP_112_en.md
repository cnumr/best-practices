## Adapt audio formats to listening contexts

### Identifiers

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   95    | 113 | 112 |     |

### Categories

| Life cycle |    Tiers    | Responsible |
| :--------: | :---------: | :---------: |
|   5. Use   | User/Device |    User     |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    2     |             2             |         3         |

| Saved resources |
| :-------------: |
|     Network     |

### Description

Audio files can be large and use a lot of bandwidth. Optimizing their size is essential. When possible use these 3 formats available in the 3 major OS (Windows, MacOS, and Linux):

- MP3 (MPEG-1 Audio Layer 3);
- AAC (Advanced Audio Coding);
- Vorbis. These audio formats use very advanced compression algorithms, considerably reducing audio file size.

### Example

Encoders such as LAME allow the conversion of uncompressed audio files to MP3 but also the alteration of sampling rate to optimize audio file size at the expense of audio quality. Test on each audio sound file.

In the case of a 63,128 bytes sound.wav WAV file template, MP3 conversion would result in:

- 6 times lighter sound-128.mp3 file of 10,823 bytes (128 kb/s);
- 10 times lighter sound-64.mp3 file of 6,508 bytes (64 kb/s).

### Validation rule

| The number of ...                                                                                                  | is equal to or less than |
| ------------------------------------------------------------------------------------------------------------------ | :----------------------: |
| proprietary (non-free) audio codecs and audio tracks whose megabyte weight/minute duration ratio is greater than 1 |            0             |
