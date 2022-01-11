/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props                        The block props.
 * @param {Object}   props.attributes             Block attributes.
 * @param {string}   props.attributes.customTitle Custom title to be displayed.
 * @param {string}   props.className              Class name for the block.
 * @param {Function} props.setAttributes          Sets the value for block attributes.
 * @return {Function} Render the edit screen
 */
const ExampleBockEdit = (props) => {
	const {
		attributes,
		setAttributes,
	} = props;
	const { customTitle: currentTitle } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<RichText
				className="wp-block-example-block__title"
				tagName="h2"
				placeholder={__('Custom Title')}
				value={currentTitle}
				onChange={(customTitle) => setAttributes({ customTitle })}
			/>
		</div>
	);
};
export default ExampleBockEdit;
