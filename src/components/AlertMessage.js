import {Alert} from 'react-native';

export const AlertMessage = (title, message) => {
	Alert.alert(title, message, [{text: 'ok'}], {cancelable: false});
};

export const AlertMessageReset = (
	title,
	message,
	action = null,
	param = [],
) => {
	Alert.alert(
		title,
		message,
		[
			{
				text: 'ok',
				onPress: () => {
					if (action != null) {
						action();
					}
				},
			},
			...param,
		],
		{cancelable: false},
	);
};