import type { SelectOption } from '@rocket.chat/fuselage';
import { AccordionItem, Field, FieldGroup, FieldHint, FieldLabel, FieldLink, FieldRow, Select, ToggleSwitch } from '@rocket.chat/fuselage';
import { useId, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const PreferencesMessagesSection = () => {
	const { t } = useTranslation();
	const { control } = useFormContext();

	const alsoSendThreadMessageToChannelOptions = useMemo(
		(): SelectOption[] => [
			['default', t('Selected_first_reply_unselected_following_replies')],
			['always', t('Selected_by_default')],
			['never', t('Unselected_by_default')],
		],
		[t],
	);

	const sendOnEnterOptions = useMemo(
		(): SelectOption[] => [
			['normal', t('Enter_Normal')],
			['alternative', t('Enter_Alternative')],
			['desktop', t('Only_On_Desktop')],
		],
		[t],
	);

	const unreadAlertId = useId();
	const showThreadsInMainChannelId = useId();
	const alsoSendThreadToChannelId = useId();
	const useEmojisId = useId();
	const convertAsciiEmojiId = useId();
	const autoImageLoadId = useId();
	const saveMobileBandwidthId = useId();
	const collapseMediaByDefaultId = useId();
	const hideFlexTabId = useId();
	const displayAvatarsId = useId();
	const sendOnEnterId = useId();
	const messageTimeFormatLabelId = useId();
	const messageTimeFormatLinkId = useId();
	const hideUsernamesLabelId = useId();
	const hideUsernamesLinkId = useId();
	const hideRolesLabelId = useId();
	const hideRolesLinkId = useId();

	return (
		<AccordionItem title={t('Messages')}>
			<FieldGroup>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={unreadAlertId}>{t('Unread_Tray_Icon_Alert')}</FieldLabel>
						<Controller
							name='unreadAlert'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={unreadAlertId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={showThreadsInMainChannelId}>{t('Always_show_thread_replies_in_main_channel')}</FieldLabel>
						<Controller
							name='showThreadsInMainChannel'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch
									aria-describedby={`${showThreadsInMainChannelId}-hint`}
									id={showThreadsInMainChannelId}
									ref={ref}
									checked={value}
									onChange={onChange}
								/>
							)}
						/>
					</FieldRow>
					<FieldHint id={`${showThreadsInMainChannelId}-hint`}>
						{t('Accounts_Default_User_Preferences_showThreadsInMainChannel_Description')}
					</FieldHint>
				</Field>
				<Field>
					<FieldLabel is='span' id={alsoSendThreadToChannelId}>
						{t('Also_send_thread_message_to_channel_behavior')}
					</FieldLabel>
					<FieldRow>
						<Controller
							name='alsoSendThreadToChannel'
							control={control}
							render={({ field: { value, onChange } }) => (
								<Select
									aria-labelledby={alsoSendThreadToChannelId}
									aria-describedby={`${alsoSendThreadToChannelId}-hint`}
									value={value}
									onChange={onChange}
									options={alsoSendThreadMessageToChannelOptions}
								/>
							)}
						/>
					</FieldRow>
					<FieldHint id={`${alsoSendThreadToChannelId}-hint`}>
						{t('Accounts_Default_User_Preferences_alsoSendThreadToChannel_Description')}
					</FieldHint>
				</Field>
				<Field>
					<FieldLabel is='span' id={messageTimeFormatLabelId}>
						{t('Message_TimeFormat')}
					</FieldLabel>
					<FieldLink
						id={messageTimeFormatLinkId}
						aria-labelledby={`${messageTimeFormatLabelId} ${messageTimeFormatLinkId}`}
						href='/account/accessibility-and-appearance'
					>
						{t('Go_to_accessibility_and_appearance')}
					</FieldLink>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={useEmojisId}>{t('Use_Emojis')}</FieldLabel>
						<Controller
							name='useEmojis'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={useEmojisId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={convertAsciiEmojiId}>{t('Convert_Ascii_Emojis')}</FieldLabel>
						<Controller
							name='convertAsciiEmoji'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={convertAsciiEmojiId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={autoImageLoadId}>{t('Auto_Load_Images')}</FieldLabel>
						<Controller
							name='autoImageLoad'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={autoImageLoadId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={saveMobileBandwidthId}>{t('Save_Mobile_Bandwidth')}</FieldLabel>
						<Controller
							name='saveMobileBandwidth'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={saveMobileBandwidthId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={collapseMediaByDefaultId}>{t('Collapse_Embedded_Media_By_Default')}</FieldLabel>
						<Controller
							name='collapseMediaByDefault'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={collapseMediaByDefaultId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldLabel is='span' id={hideUsernamesLabelId}>
						{t('Hide_usernames')}
					</FieldLabel>
					<FieldLink
						href='/account/accessibility-and-appearance'
						id={hideUsernamesLinkId}
						aria-labelledby={`${hideUsernamesLabelId} ${hideUsernamesLinkId}`}
					>
						{t('Go_to_accessibility_and_appearance')}
					</FieldLink>
				</Field>
				<Field>
					<FieldLabel is='span' id={hideRolesLabelId}>
						{t('Hide_roles')}
					</FieldLabel>
					<FieldLink
						id={hideRolesLinkId}
						aria-labelledby={`${hideRolesLabelId} ${hideRolesLinkId}`}
						href='/account/accessibility-and-appearance'
					>
						{t('Go_to_accessibility_and_appearance')}
					</FieldLink>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={hideFlexTabId}>{t('Hide_flextab')}</FieldLabel>
						<Controller
							name='hideFlexTab'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={hideFlexTabId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldRow>
						<FieldLabel htmlFor={displayAvatarsId}>{t('Display_avatars')}</FieldLabel>
						<Controller
							name='displayAvatars'
							control={control}
							render={({ field: { value, onChange, ref } }) => (
								<ToggleSwitch id={displayAvatarsId} ref={ref} checked={value} onChange={onChange} />
							)}
						/>
					</FieldRow>
				</Field>
				<Field>
					<FieldLabel is='span' id={sendOnEnterId}>
						{t('Enter_Behaviour')}
					</FieldLabel>
					<FieldRow>
						<Controller
							name='sendOnEnter'
							control={control}
							render={({ field: { value, onChange } }) => (
								<Select aria-labelledby={sendOnEnterId} value={value} onChange={onChange} options={sendOnEnterOptions} />
							)}
						/>
					</FieldRow>
					<FieldHint>{t('Enter_Behaviour_Description')}</FieldHint>
				</Field>
			</FieldGroup>
		</AccordionItem>
	);
};

export default PreferencesMessagesSection;
