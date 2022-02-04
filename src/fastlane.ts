const actionGenerators: Fig.Generator = {
  custom: async (context) => {
    const searchTerm = context[context.length - 1];
    return [
      { name: "adb", description: "Run ADB Actions" },
      {
        name: "adb_devices",
        description: "Get an array of Connected android device serials",
      },
      {
        name: "add_extra_platforms",
        description: "Modify the default list of supported platforms",
      },
      {
        name: "add_git_tag",
        description: "This will add an annotated git tag to the current branch",
      },
      {
        name: "app_store_build_number",
        description:
          "Returns the current build_number of either live or edit version",
      },
      {
        name: "app_store_connect_api_key",
        description:
          "Load the App Store Connect API token to use in other fastlane tools and actions",
      },
      {
        name: "appaloosa",
        description:
          "Upload your app to 'Appaloosa Store' (https://www.appaloosa-store.com/ 🔗)",
      },
      {
        name: "appetize",
        description:
          "Upload your app to 'Appetize.io' (https://appetize.io/ 🔗) to stream it in browser",
      },
      {
        name: "appetize_viewing_url_generator",
        description: "Generate an URL for appetize simulator",
      },
      { name: "appium", description: "Run UI test by Appium with RSpec" },
      {
        name: "appledoc",
        description:
          "Generate Apple-like source code documentation from the source code",
      },
      {
        name: "appstore",
        description: "Alias for the `upload_to_app_store` action",
      },
      {
        name: "apteligent",
        description:
          "Upload dSYM file to 'Apteligent' (Crittercism) (http://www.apteligent.com/ 🔗)",
      },
      {
        name: "artifactory",
        description: "This action uploads an artifact to artifactory",
      },
      {
        name: "automatic_code_signing",
        description: "DEPRECATED: Configures Xcode's Codesigning options",
      },
      {
        name: "backup_file",
        description: "This action backs up your file to [path].back",
      },
      {
        name: "backup_xcarchive",
        description: "Save your [zipped] xcarchive elsewhere from default path",
      },
      {
        name: "badge",
        description: "DEPRECATED: Automatically add a badge to your app icon",
      },
      {
        name: "build_and_upload_to_appetize",
        description: "Generate and upload an ipa file to appetize.io",
      },
      {
        name: "build_android_app",
        description: "Alias for the `gradle` action",
      },
      {
        name: "build_app",
        description: "Easily build and sign your app (via _gym_)",
      },
      {
        name: "build_ios_app",
        description: "Alias for the `build_app` action but only for iOS",
      },
      {
        name: "build_mac_app",
        description: "Alias for the `build_app` action but only for macOS",
      },
      {
        name: "bundle_install",
        description: "This action runs `bundle install` (if available)",
      },
      {
        name: "capture_android_screenshots",
        description:
          "Automated localized screenshots of your Android app (via _screengrab_)",
      },
      {
        name: "capture_ios_screenshots",
        description:
          "Generate new localized screenshots on multiple devices (via _snapshot_)",
      },
      {
        name: "capture_screenshots",
        description: "Alias for the `capture_ios_screenshots` action",
      },
      { name: "carthage", description: "Runs `carthage` for your project" },
      { name: "cert", description: "Alias for the `get_certificates` action" },
      {
        name: "changelog_from_git_commits",
        description: "Collect git commit messages into a changelog",
      },
      {
        name: "chatwork",
        description:
          "Send a success/error message to ChatWork (https://go.chatwork.com/ 🔗)",
      },
      {
        name: "check_app_store_metadata",
        description:
          "Check your app's metadata before you submit your app to review (via _precheck_)",
      },
      {
        name: "clean_build_artifacts",
        description:
          "Deletes files created as result of running gym, cert, sigh or download_dsyms",
      },
      {
        name: "clean_cocoapods_cache",
        description: "Remove the cache for pods",
      },
      {
        name: "clear_derived_data",
        description: "Deletes the Xcode Derived Data",
      },
      {
        name: "clipboard",
        description:
          "Copies a given string into the clipboard. Works only on macOS",
      },
      {
        name: "cloc",
        description:
          "Generates a Code Count that can be read by Jenkins (xml format)",
      },
      { name: "cocoapods", description: "Runs `pod install` for the project" },
      {
        name: "commit_github_file",
        description: "This will commit a file directly on GitHub via the API",
      },
      {
        name: "commit_version_bump",
        description:
          "Creates a 'Version Bump' commit. Run after `increment_build_number`",
      },
      {
        name: "copy_artifacts",
        description:
          "Copy and save your build artifacts (useful when you use reset_git_repo)",
      },
      {
        name: "create_app_on_managed_play_store",
        description: "Create Managed Google Play Apps",
      },
      {
        name: "create_app_online",
        description:
          "Creates the given application on iTC and the Dev Portal (via _produce_)",
      },
      { name: "create_keychain", description: "Create a new Keychain" },
      {
        name: "create_pull_request",
        description: "This will create a new pull request on GitHub",
      },
      {
        name: "create_xcframework",
        description:
          "Package multiple build configs of a library/framework into a single xcframework",
      },
      { name: "danger", description: "Runs `danger` for the project" },
      {
        name: "debug",
        description: "Print out an overview of the lane context values",
      },
      {
        name: "default_platform",
        description:
          "Defines a default platform to not have to specify the platform",
      },
      {
        name: "delete_keychain",
        description: "Delete keychains and remove them from the search list",
      },
      {
        name: "deliver",
        description: "Alias for the `upload_to_app_store` action",
      },
      {
        name: "deploygate",
        description:
          "Upload a new build to 'DeployGate' (https://deploygate.com/ 🔗)",
      },
      {
        name: "dotgpg_environment",
        description:
          "Reads in production secrets set in a dotgpg file and puts them in ENV",
      },
      {
        name: "download",
        description: "Download a file from a remote server (e.g. JSON file)",
      },
      {
        name: "download_app_privacy_details_from_app_store",
        description:
          "Download App Privacy Details from an app in App Store Connect",
      },
      {
        name: "download_dsyms",
        description:
          "Download dSYM files from App Store Connect for Bitcode apps",
      },
      {
        name: "download_from_play_store",
        description:
          "Download metadata and binaries from Google Play (via _supply_)",
      },
      {
        name: "dsym_zip",
        description:
          "Creates a zipped dSYM in the project root from the .xcarchive",
      },
      { name: "echo", description: "Alias for the `puts` action" },
      {
        name: "ensure_bundle_exec",
        description:
          "Raises an exception if not using `bundle exec` to run fastlane",
      },
      {
        name: "ensure_env_vars",
        description:
          "Raises an exception if the specified env vars are not set",
      },
      {
        name: "ensure_git_branch",
        description: "Raises an exception if not on a specific git branch",
      },
      {
        name: "ensure_git_status_clean",
        description: "Raises an exception if there are uncommitted git changes",
      },
      {
        name: "ensure_no_debug_code",
        description: "Ensures the given text is nowhere in the code base",
      },
      {
        name: "ensure_xcode_version",
        description: "Ensure the right version of Xcode is used",
      },
      {
        name: "environment_variable",
        description:
          "Sets/gets env vars for Fastlane.swift. Don't use in ruby, use `ENV[key] = val`",
      },
      {
        name: "erb",
        description: "Allows to Generate output files based on ERB templates",
      },
      {
        name: "fastlane_version",
        description: "Alias for the `min_fastlane_version` action",
      },
      {
        name: "flock",
        description:
          "Send a message to a 'Flock' (https://flock.com/ 🔗) group",
      },
      {
        name: "frame_screenshots",
        description:
          "Adds device frames around all screenshots (via _frameit_)",
      },
      {
        name: "frameit",
        description: "Alias for the `frame_screenshots` action",
      },
      {
        name: "gcovr",
        description: "Runs test coverage reports for your Xcode project",
      },
      {
        name: "get_build_number",
        description: "Get the build number of your project",
      },
      {
        name: "get_build_number_repository",
        description: "Get the build number from the current repository",
      },
      {
        name: "get_certificates",
        description: "Create new iOS code signing certificates (via _cert_)",
      },
      {
        name: "get_github_release",
        description:
          "This will verify if a given release version is available on GitHub",
      },
      {
        name: "get_info_plist_value",
        description:
          "Returns value from Info.plist of your project as native Ruby data structures",
      },
      {
        name: "get_ipa_info_plist_value",
        description: "Returns a value from Info.plist inside a .ipa file",
      },
      {
        name: "get_managed_play_store_publishing_rights",
        description:
          "Obtain publishing rights for custom apps on Managed Google Play Store",
      },
      {
        name: "get_provisioning_profile",
        description:
          "Generates a provisioning profile, saving it in the current folder (via _sigh_)",
      },
      {
        name: "get_push_certificate",
        description:
          "Ensure a valid push profile is active, creating a new one if needed (via _pem_)",
      },
      {
        name: "get_version_number",
        description: "Get the version number of your project",
      },
      {
        name: "git_add",
        description: "Directly add the given file or all files",
      },
      {
        name: "git_branch",
        description:
          "Returns the name of the current git branch, possibly as managed by CI ENV vars",
      },
      {
        name: "git_commit",
        description: "Directly commit the given file with the given message",
      },
      { name: "git_pull", description: "Executes a simple git pull command" },
      {
        name: "git_remote_branch",
        description:
          "Returns the name of the current git remote default branch",
      },
      {
        name: "git_submodule_update",
        description: "Executes a git submodule update command",
      },
      {
        name: "git_tag_exists",
        description:
          "Checks if the git tag with the given name exists in the current repo",
      },
      {
        name: "github_api",
        description:
          "Call a GitHub API endpoint and get the resulting JSON response",
      },
      {
        name: "google_play_track_release_names",
        description: "Retrieves release names for a Google Play track",
      },
      {
        name: "google_play_track_version_codes",
        description: "Retrieves version codes for a Google Play track",
      },
      {
        name: "gradle",
        description:
          "All gradle related actions, including building and testing your Android app",
      },
      { name: "gym", description: "Alias for the `build_app` action" },
      {
        name: "hg_add_tag",
        description: "This will add a hg tag to the current branch",
      },
      {
        name: "hg_commit_version_bump",
        description: "This will commit a version bump to the hg repo",
      },
      {
        name: "hg_ensure_clean_status",
        description: "Raises an exception if there are uncommitted hg changes",
      },
      {
        name: "hg_push",
        description: "This will push changes to the remote hg repository",
      },
      {
        name: "hipchat",
        description:
          "Send a error/success message to `HipChat` (https://www.hipchat.com/ 🔗)",
      },
      {
        name: "hockey",
        description:
          "DEPRECATED. Refer to `App Center` (https://github.com/Microsoft/fastlane-plugin-appcenter/ 🔗)",
      },
      {
        name: "ifttt",
        description:
          "Connect to the `IFTTT Maker Channel` (https://ifttt.com/maker 🔗)",
      },
      {
        name: "import",
        description: "Import another Fastfile to use its lanes",
      },
      {
        name: "import_certificate",
        description: "Import certificate from inputfile into a keychain",
      },
      {
        name: "import_from_git",
        description:
          "Import another Fastfile from a remote git repository to use its lanes",
      },
      {
        name: "increment_build_number",
        description: "Increment the build number of your project",
      },
      {
        name: "increment_version_number",
        description: "Increment the version number of your project",
      },
      {
        name: "install_on_device",
        description:
          "Installs an .ipa file on a connected iOS-device via usb or wifi",
      },
      {
        name: "install_provisioning_profile",
        description: "Install provisioning profile from path",
      },
      {
        name: "install_xcode_plugin",
        description: "Install an Xcode plugin for the current user",
      },
      {
        name: "installr",
        description:
          "Upload a new build to `Installr` (http://installrapp.com/ 🔗)",
      },
      {
        name: "ipa",
        description:
          "DEPRECATED. Easily build and sign your app using shenzhen",
      },
      {
        name: "is_ci",
        description:
          "Is the current run being executed on a CI system, like Jenkins or Travis",
      },
      { name: "jazzy", description: "Generate docs using Jazzy" },
      { name: "jira", description: "Leave a comment on a Jira ticket" },
      { name: "lane_context", description: "Access lane context values" },
      {
        name: "last_git_commit",
        description:
          "Return last git commit hash, abbreviated commit hash, commit message and author",
      },
      { name: "last_git_tag", description: "Get the most recent git tag" },
      {
        name: "latest_testflight_build_number",
        description: "Fetches most recent build number from TestFlight",
      },
      { name: "lcov", description: "Generates coverage data using lcov" },
      {
        name: "mailgun",
        description: "Send a success/error message to an email group",
      },
      {
        name: "make_changelog_from_jenkins",
        description:
          "Generate a changelog using the Changes section from the current Jenkins build",
      },
      {
        name: "match",
        description: "Alias for the `sync_code_signing` action",
      },
      {
        name: "match_nuke",
        description:
          "Easily nuke your certificate and provisioning profiles (via _match_)",
      },
      {
        name: "min_fastlane_version",
        description: "Verifies the minimum fastlane version required",
      },
      {
        name: "modify_services",
        description:
          "Modifies the services of the app created on Developer Portal",
      },
      {
        name: "nexus_upload",
        description:
          "Upload a file to 'Sonatype Nexus platform' (https://www.sonatype.com 🔗)",
      },
      { name: "notarize", description: "Notarizes a macOS app" },
      {
        name: "notification",
        description:
          "Display a macOS notification with custom message and title",
      },
      {
        name: "notify",
        description:
          "DEPRECATED. Shows a macOS notification - use `notification` instead",
      },
      {
        name: "number_of_commits",
        description: "Return the number of commits in current git branch",
      },
      { name: "oclint", description: "Lints implementation files with OCLint" },
      {
        name: "onesignal",
        description:
          "Create or update a new 'OneSignal' (https://onesignal.com/ 🔗) application",
      },
      {
        name: "opt_out_crash_reporting",
        description:
          "DEPRECATED. This will prevent reports from being uploaded when _fastlane_ crashes",
      },
      {
        name: "opt_out_usage",
        description:
          "This will stop uploading the information which actions were run",
      },
      {
        name: "pem",
        description: "Alias for the `get_push_certificate` action",
      },
      {
        name: "pilot",
        description: "Alias for the `upload_to_testflight` action",
      },
      { name: "pod_lib_lint", description: "Pod lib lint" },
      {
        name: "pod_push",
        description: "Push a Podspec to Trunk or a private repository",
      },
      {
        name: "podio_item",
        description: "Creates or updates an item within your Podio app",
      },
      {
        name: "precheck",
        description: "Alias for the `check_app_store_metadata` action",
      },
      { name: "println", description: "Alias for the `puts` action" },
      {
        name: "produce",
        description: "Alias for the `create_app_online` action",
      },
      {
        name: "prompt",
        description: "Ask the user for a value or for confirmation",
      },
      {
        name: "push_git_tags",
        description: "Push local tags to the remote - this will only push tags",
      },
      {
        name: "push_to_git_remote",
        description: "Push local changes to the remote branch",
      },
      { name: "puts", description: "Prints out the given text" },
      { name: "read_podspec", description: "Loads a CocoaPods spec as JSON" },
      {
        name: "recreate_schemes",
        description: "Recreate not shared Xcode project schemes",
      },
      {
        name: "register_device",
        description: "Registers a new device to the Apple Dev Portal",
      },
      {
        name: "register_devices",
        description: "Registers new devices to the Apple Dev Portal",
      },
      {
        name: "reset_git_repo",
        description:
          "Resets git repo to a clean state by discarding uncommitted changes",
      },
      {
        name: "reset_simulator_contents",
        description: "Shutdown and reset running simulators",
      },
      { name: "resign", description: "Codesign an existing ipa file" },
      {
        name: "restore_file",
        description:
          "This action restore your file that was backuped with the `backup_file` action",
      },
      { name: "rocket", description: "Outputs ascii-art for a rocket 🚀" },
      {
        name: "rsync",
        description: "Rsync files from :source to :destination",
      },
      {
        name: "ruby_version",
        description: "Verifies the minimum ruby version required",
      },
      {
        name: "run_tests",
        description: "Easily run tests of your iOS app (via _scan_)",
      },
      {
        name: "s3",
        description:
          "DEPRECATED. Generates a plist file and uploads all to AWS S3",
      },
      {
        name: "say",
        description: "This action speaks the given text out loud",
      },
      { name: "scan", description: "Alias for the `run_tests` action" },
      { name: "scp", description: "Transfer files via SCP" },
      {
        name: "screengrab",
        description: "Alias for the `capture_android_screenshots` action",
      },
      {
        name: "set_build_number_repository",
        description: "Set the build number from the current repository",
      },
      {
        name: "set_changelog",
        description: "Set the changelog for all languages on App Store Connect",
      },
      {
        name: "set_github_release",
        description:
          "This will create a new release on GitHub and upload assets for it",
      },
      {
        name: "set_info_plist_value",
        description:
          "Sets value to Info.plist of your project as native Ruby data structures",
      },
      {
        name: "set_pod_key",
        description: "Sets a value for a key with cocoapods-keys",
      },
      {
        name: "setup_ci",
        description: "Setup the keychain and match to work with CI",
      },
      {
        name: "setup_circle_ci",
        description: "Setup the keychain and match to work with CircleCI",
      },
      {
        name: "setup_jenkins",
        description:
          "Setup xcodebuild, gym and scan for easier Jenkins integration",
      },
      {
        name: "setup_travis",
        description: "Setup the keychain and match to work with Travis CI",
      },
      { name: "sh", description: "Runs a shell command" },
      {
        name: "sigh",
        description: "Alias for the `get_provisioning_profile` action",
      },
      {
        name: "skip_docs",
        description:
          "Skip the creation of the fastlane/README.md file when running fastlane",
      },
      {
        name: "slack",
        description:
          "Send a success/error message to your 'Slack' (https://slack.com 🔗) group",
      },
      {
        name: "slather",
        description: "Use slather to generate a code coverage report",
      },
      {
        name: "snapshot",
        description: "Alias for the `capture_ios_screenshots` action",
      },
      {
        name: "sonar",
        description:
          "Invokes sonar-scanner to programmatically run SonarQube analysis",
      },
      { name: "sourcedocs", description: "Generate docs using SourceDocs" },
      {
        name: "spaceship_logs",
        description: "Find, print, and copy Spaceship logs",
      },
      {
        name: "spaceship_stats",
        description:
          "Print out Spaceship stats from this session (number of request to each domain)",
      },
      {
        name: "splunkmint",
        description:
          "Upload dSYM file to 'Splunk MINT' (https://mint.splunk.com/ 🔗)",
      },
      {
        name: "spm",
        description: "Runs Swift Package Manager on your project",
      },
      { name: "ssh", description: "Allows remote command execution using ssh" },
      {
        name: "supply",
        description: "Alias for the `upload_to_play_store` action",
      },
      {
        name: "swiftlint",
        description: "Run swift code validation using SwiftLint",
      },
      {
        name: "sync_code_signing",
        description:
          "Easily sync your certificates and profiles across your team (via _match_)",
      },
      {
        name: "team_id",
        description:
          "Specify the Team ID you want to use for the Apple Developer Portal",
      },
      { name: "team_name", description: "Set a team to use by its name" },
      {
        name: "testfairy",
        description:
          "Upload a new build to 'TestFairy' (https://www.testfairy.com/ 🔗)",
      },
      {
        name: "testflight",
        description: "Alias for the `upload_to_testflight` action",
      },
      {
        name: "trainer",
        description: "Convert the Xcode plist log to a JUnit report",
      },
      {
        name: "tryouts",
        description: "Upload a new build to 'Tryouts' (https://tryouts.io/ 🔗)",
      },
      {
        name: "twitter",
        description: "Post a tweet on 'Twitter.com' (https://twitter.com 🔗)",
      },
      {
        name: "typetalk",
        description:
          "Post a message to 'Typetalk' (https://www.typetalk.com/ 🔗)",
      },
      { name: "unlock_keychain", description: "Unlock a keychain" },
      {
        name: "update_app_group_identifiers",
        description:
          "This action changes the app group identifiers in the entitlements file",
      },
      {
        name: "update_app_identifier",
        description: "Update the project's bundle identifier",
      },
      {
        name: "update_code_signing_settings",
        description: "Configures Xcode's Codesigning options",
      },
      {
        name: "update_fastlane",
        description:
          "Makes sure fastlane-tools are up-to-date when running fastlane",
      },
      {
        name: "update_icloud_container_identifiers",
        description:
          "This action changes the iCloud container identifiers in the entitlements file",
      },
      {
        name: "update_info_plist",
        description:
          "Update a Info.plist file with bundle identifier and display name",
      },
      {
        name: "update_keychain_access_groups",
        description:
          "This action changes the keychain access groups in the entitlements file",
      },
      { name: "update_plist", description: "Update a plist file" },
      {
        name: "update_project_code_signing",
        description:
          "DEPRECATED. Updated code signing settings from 'Automatic' to a specific profile",
      },
      {
        name: "update_project_provisioning",
        description:
          "Update projects code signing settings from your provisioning profile",
      },
      {
        name: "update_project_team",
        description: "Update Xcode Development Team ID",
      },
      {
        name: "update_urban_airship_configuration",
        description:
          "Set `Urban Airship` (https://www.urbanairship.com/ 🔗) plist configuration values",
      },
      {
        name: "update_url_schemes",
        description: "Updates the URL schemes in the given Info.plist",
      },
      {
        name: "upload_app_privacy_details_to_app_store",
        description:
          "Upload App Privacy Details for an app in App Store Connect",
      },
      {
        name: "upload_symbols_to_crashlytics",
        description: "Upload dSYM symbolication files to Crashlytics",
      },
      {
        name: "upload_symbols_to_sentry",
        description: "DEPRECATED. Upload dSYM symbolication files to Sentry",
      },
      {
        name: "upload_to_app_store",
        description:
          "Upload metadata and binary to App Store Connect (via _deliver_)",
      },
      {
        name: "upload_to_play_store",
        description:
          "Upload metadata, screenshots and binaries to Google Play (via _supply_)",
      },
      {
        name: "upload_to_play_store_internal_app_sharing",
        description:
          "Upload binaries to Google Play Internal App Sharing (via _supply_)",
      },
      {
        name: "upload_to_testflight",
        description:
          "Upload new binary to App Store Connect for TestFlight beta testing (via _pilot_)",
      },
      {
        name: "validate_play_store_json_key",
        description: "Validate that the Google Play Store `json_key` works",
      },
      {
        name: "verify_build",
        description: "Able to verify various settings in ipa file",
      },
      {
        name: "verify_pod_keys",
        description:
          "Verifies all keys referenced from the Podfile are non-empty",
      },
      {
        name: "verify_xcode",
        description:
          "Verifies that the Xcode installation is properly signed by Apple",
      },
      {
        name: "version_bump_podspec",
        description: "Increment or set the version in a podspec file",
      },
      {
        name: "version_get_podspec",
        description: "Receive the version number from a podspec file",
      },
      {
        name: "xcarchive",
        description: "Archives the project using `xcodebuild`",
      },
      { name: "xcbuild", description: "Builds the project using `xcodebuild`" },
      { name: "xcclean", description: "Cleans the project using `xcodebuild`" },
      {
        name: "xcexport",
        description: "Exports the project using `xcodebuild`",
      },
      {
        name: "xcode_install",
        description: "Make sure a certain version of Xcode is installed",
      },
      {
        name: "xcode_select",
        description:
          "Change the xcode-path to use. Useful for beta versions of Xcode",
      },
      {
        name: "xcode_server_get_assets",
        description:
          "Downloads Xcode Bot assets like the `.xcarchive` and logs",
      },
      {
        name: "xcodebuild",
        description: "Use the `xcodebuild` command to build and sign your app",
      },
      {
        name: "xcov",
        description: "Nice code coverage reports without hassle",
      },
      { name: "xctest", description: "Runs tests on the given simulator" },
      { name: "xctool", description: "Run tests using xctool" },
      {
        name: "xcversion",
        description: "Select an Xcode to use by version specifier",
      },
      { name: "zip", description: "Compress a file or folder to a zip" },
    ];
  },
};

const completionSpec: Fig.Spec = {
  name: "fastlane",
  description:
    "Fastlane is an open source platform aimed at simplifying Android and iOS deployment",
  subcommands: [
    {
      name: "init",
      description: "Helps you with your initial fastlane setup",
      subcommands: [
        {
          name: "swift",
          description:
            "Fastlane configuration written in Swift (Beta). Swift setup is still in beta",
        },
      ],
      options: [
        {
          name: ["-u", "--user"],
          description: "Only iOS projects Your Apple ID",
          isRequired: false,
          args: {
            name: "appleID",
            description: "Your Apple ID",
          },
        },
      ],
    },
    {
      name: "action",
      description: "Shows more information for a specific command",
      args: {
        name: "tool_name",
        isOptional: false,
        generators: actionGenerators,
      },
    },
    {
      name: "actions",
      description: "Lists all available fastlane actions",
    },
    {
      name: "add_plugin",
      description: "Add a new plugin to your fastlane setup",
      args: {
        name: "plugin_name",
        isOptional: false,
      },
    },
    {
      name: "docs",
      description:
        "Generate a markdown based documentation based on the Fastfile",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Overwrite the existing README.md in the ./fastlane folder",
        },
      ],
    },
    {
      name: "enable_auto_complete",
      description: "Enable tab auto completion",
      options: [
        {
          name: ["-c", "--custom"],
          description:
            "Add custom command(s) for which tab auto complete should be enabled too",
          args: {
            name: "<command1>...<commandN>",
          },
        },
      ],
    },
    {
      name: "env",
      description:
        "Print your fastlane environment, use this when you submit an issue on GitHub",
    },
    {
      name: "help",
      description: "Display global or [command] help documentation",
    },
    {
      name: "install_plugins",
      description: "Install all plugins for this project",
    },
    {
      name: "lanes",
      description: "Lists all available lanes and shows their description",
    },
    {
      name: "list",
      description: "Lists all available lanes without description",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output the lanes in JSON instead of text",
          isRequired: false,
        },
      ],
    },
    {
      name: "new_action",
      description: "Create a new custom action for fastlane",
      options: [
        {
          name: "--name",
          description: "Name of your new action",
          isRequired: true,
          args: {
            name: "action_name",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "new_plugin",
      description: "Create a new plugin that can be used with fastlane",
      args: {
        name: "plugin_name",
        isOptional: true,
      },
    },
    {
      name: "run",
      description: "Run a fastlane one-off action without a full lane",
      args: {
        name: "action",
        isOptional: false,
        // TODO: Depending on the current platform directory need to show only available actions for that platform
      },
    },
    {
      name: "search_plugins",
      description: "Search for plugins, search query is optional",
      args: {
        name: "search_query",
        isOptional: true,
      },
    },
    {
      name: "socket_server",
      description:
        "Starts local socket server and enables only a single local connection",
      options: [
        {
          name: ["-s", "--stay_alive"],
          description:
            "Keeps socket server up even after error or disconnects, requires CTRL-C to kill",
        },
        {
          name: ["-c", "--connection_timeout"],
          description: "Sets connection established timeout",
          args: {
            name: "seconds",
            description: "Connection timeout in seconds",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Sets the port on localhost for the socket connection",
          args: {
            name: "port",
            description: "The port on localhost",
          },
        },
      ],
    },
    {
      name: "trigger",
      description:
        "Run a specific lane. Pass the lane name and optionally the platform first",
      options: [
        {
          name: "--disable_runner_upgrades",
          description:
            "Prevents fastlane from attempting to update FastlaneRunner swift project",
        },
        {
          name: "--swift_server_port",
          description:
            "Prevents fastlane from attempting to update FastlaneRunner swift project",
          args: {
            name: "port",
            description:
              "Set specific port to communicate between fastlane and FastlaneRunner",
          },
        },
      ],
      args: {
        name: "lane",
        description: "Specific lane to trigger",
        isOptional: false,
        // TODO: Generator to show only available lanes
      },
    },
    {
      name: "update_fastlane",
      description: "Update fastlane to the latest release",
    },
    {
      name: "update_plugins",
      description: "Update all plugin dependencies",
    },
  ],
  options: [
    {
      name: "--platform",
      description: "Only show actions available on the given platform",
      isPersistent: true,
      isRequired: false,
      priority: 49,
      args: {
        name: "platform",
        description: "One of android, ios or mac",
        suggestions: ["ios", "android"],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show help for fastlane",
      isPersistent: true,
      priority: 48,
    },
    {
      name: ["-v", "--version"],
      description: "Show version information for fastlane",
    },
    {
      name: "--verbose",
      description: "Show version information for fastlane",
      isPersistent: true,
      priority: 48,
    },
    {
      name: "--capture_output",
      description:
        "Captures the output of the current run, and generates a markdown issue template",
    },
    {
      name: "--troubleshoot",
      description:
        "Enables extended verbose mode. Use with caution, as this even includes ALL sensitive data. Cannot be used on CI",
    },
    {
      name: "--env",
      description: "Add environment(s) to use with `dotenv`",
    },
  ],
  // Only uncomment if fastlane takes an argument
  // args: {}
};
export default completionSpec;
