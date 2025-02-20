# @rocket.chat/apps-engine

## 1.47.5

### Patch Changes

- ([#35267](https://github.com/RocketChat/Rocket.Chat/pull/35267)) Fixes deno dependency caching for the docker image builds

## 1.47.4

### Patch Changes

- ([#34877](https://github.com/RocketChat/Rocket.Chat/pull/34877) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes an error where the engine would not retry a subprocess restart if the last attempt failed

- ([#34880](https://github.com/RocketChat/Rocket.Chat/pull/34880) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes an issue that prevented the apps-engine from reestablishing communications with subprocesses in some cases

- ([#34877](https://github.com/RocketChat/Rocket.Chat/pull/34877) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes error propagation when trying to get the status of apps in some cases

- ([#34877](https://github.com/RocketChat/Rocket.Chat/pull/34877) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes wrong data being reported to total failed apps metrics and statistics

## 1.47.3

### Patch Changes

- ([#34193](https://github.com/RocketChat/Rocket.Chat/pull/34193) by [@dionisio-bot](https://github.com/dionisio-bot)) Adds simple app subprocess metrics report

- ([#34193](https://github.com/RocketChat/Rocket.Chat/pull/34193) by [@dionisio-bot](https://github.com/dionisio-bot)) Attempts to restart an app subprocess if the spawn command fails

- ([#34193](https://github.com/RocketChat/Rocket.Chat/pull/34193) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes an issue while collecting the error message from a failed restart attempt of an app subprocess

- ([#34193](https://github.com/RocketChat/Rocket.Chat/pull/34193) by [@dionisio-bot](https://github.com/dionisio-bot)) Prevents app:getStatus requests from timing out in some cases

## 1.47.2

### Patch Changes

- ([#34173](https://github.com/RocketChat/Rocket.Chat/pull/34173) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes the subprocess restarting routine failing to correctly restart apps in some cases

## 1.47.1

### Patch Changes

- ([#34149](https://github.com/RocketChat/Rocket.Chat/pull/34149) by [@dionisio-bot](https://github.com/dionisio-bot)) Fixes an issue that would cause apps to appear disabled after a subprocess restart

- ([#34150](https://github.com/RocketChat/Rocket.Chat/pull/34150) by [@dionisio-bot](https://github.com/dionisio-bot)) Prevent apps' subprocesses from crashing on unhandled rejections or uncaught exceptions

- ([#34147](https://github.com/RocketChat/Rocket.Chat/pull/34147) by [@dionisio-bot](https://github.com/dionisio-bot)) Removed the 1 second timeout of `Pre` app events. Now they will follow the "global" configuration

- ([#34147](https://github.com/RocketChat/Rocket.Chat/pull/34147) by [@dionisio-bot](https://github.com/dionisio-bot)) Add support to configure apps runtime timeout via the APPS_ENGINE_RUNTIME_TIMEOUT environment variable

## 1.47.0

### Minor Changes

- ([#33433](https://github.com/RocketChat/Rocket.Chat/pull/33433)) Added support for interacting with add-ons issued in the license

### Patch Changes

- ([#33494](https://github.com/RocketChat/Rocket.Chat/pull/33494)) Fixed a problem in the deno runtime controller where it would not handle undefined child process references correctly

- ([#33417](https://github.com/RocketChat/Rocket.Chat/pull/33417)) Fixes issue with previously disabled private apps being auto enabled on update

## 1.47.0-rc.0

### Minor Changes

- ([#33433](https://github.com/RocketChat/Rocket.Chat/pull/33433)) Added support for interacting with add-ons issued in the license

### Patch Changes

- ([#33494](https://github.com/RocketChat/Rocket.Chat/pull/33494)) Fixed a problem in the deno runtime controller where it would not handle undefined child process references correctly

- ([#33417](https://github.com/RocketChat/Rocket.Chat/pull/33417)) Fixes issue with previously disabled private apps being auto enabled on update
