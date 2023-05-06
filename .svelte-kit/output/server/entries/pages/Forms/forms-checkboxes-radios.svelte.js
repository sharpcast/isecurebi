import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-584434b3.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import { L as Label } from "../../../chunks/Label-1c7919d2.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import "../../../chunks/CardHeader-84e061db.js";
const Forms_checkboxes_radios = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Checkbox = `<Col lg={4} md={6}>
	<div>
		<p class="text-muted fw-medium">
			Default Checkbox
		</p>
		<p class="text-muted">
			Use <code>type="checkbox"</code>
			attribute to set a checkbox and add
			<code>checked</code> attribute to set
			a checkbox checked by default.
		</p>
		<div class="form-check mb-2">
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck1"
			/>
			<Label
				class="form-check-label"
				for="formCheck1"
				>Default checkbox</Label
			>
		</div>
		<div class="form-check">
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck2"
				checked
			/>
			/
			<Label
				class="form-check-label"
				for="formCheck2"
				>Checked checkbox</Label
			>
		</div>
	</div>
</Col>

<Col lg={4} md={6}>
	<div class="mt-4 mt-md-0">
		<p class="text-muted fw-medium">
			Disabled Checkbox
		</p>
		<p class="text-muted">
			Use <code>disabled</code> attribute
			to set a checkbox disabled and add
			<code>checked</code> attribute to set
			a checkbox checked by default.
		</p>
		<div>
			<div
				class="form-check form-check-right mb-2"
			>
				<input
					class="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDisabled"
					disabled
				/>
				<Label
					class="form-check-label"
					for="flexCheckDisabled"
				>
					Disabled checkbox
				</Label>
			</div>
		</div>
		<div>
			<div
				class="form-check form-check-right"
			>
				<input
					class="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckCheckedDisabled"
					checked
					disabled
				/>
				<Label
					class="form-check-label"
					for="flexCheckCheckedDisabled"
				>
					Disabled checked checkbox
				</Label>
			</div>
		</div>
	</div>
</Col>

<Col lg={4} md={6}>
	<div class="mt-4 mt-md-0">
		<p class="text-muted fw-medium">
			Checkbox Right
		</p>
		<p class="text-muted">
			Use <code>form-check-right</code> class
			to form-check class to set a checkbox
			on the right side.
		</p>
		<div
			class="form-check form-check-right mb-2"
		>
			<input
				class="form-check-input"
				type="checkbox"
				name="formCheckboxRight"
				id="formCheckboxRight1"
			/>
			<Label
				class="form-check-label"
				for="formCheckboxRight1"
			>
				Form Radio Right
			</Label>
		</div>
		<div>
			<div
				class="form-check form-check-right"
			>
				<input
					class="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckCheckedRightDisabled"
					checked
					disabled
				/>
				<Label
					class="form-check-label"
					for="flexCheckCheckedRightDisabled"
				>
					Disabled checked checkbox
				</Label>
			</div>
		</div>
	</div>
</Col>

<Col lg={6}>
	<div class="mt-3">
		<p class="text-muted fw-medium">
			Indeterminate
		</p>
		<div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					value=""
					id="defaultIndeterminateCheck"
				/>
				<Label
					class="form-check-label"
					for="defaultIndeterminateCheck"
				>
					Indeterminate checkbox
				</Label>
			</div>
		</div>
	</div>
</Col>
`;
  const CustomCheckbox = `<Col md={6}>
<div>
	<p class="text-muted">
		Use <code>form-check-</code> class with
		below-mentioned color variation to set
		a color checkbox.
	</p>
	<div>
		<div class="form-check mb-3">
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck6"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck6"
			>
				Checkbox Primary
			</Label>
		</div>
		<div
			class="form-check form-check-secondary mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck7"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck7"
			>
				Checkbox Secondary
			</Label>
		</div>
		<div
			class="form-check form-check-success mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck8"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck8"
			>
				Checkbox Success
			</Label>
		</div>
		<div
			class="form-check form-check-warning mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck9"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck9"
			>
				Checkbox Warning
			</Label>
		</div>
		<div
			class="form-check form-check-danger mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck10"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck10"
			>
				Checkbox Danger
			</Label>
		</div>
		<div
			class="form-check form-check-info mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck11"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck11"
				>Checkbox Info</Label
			>
		</div>
		<div
			class="form-check form-check-dark"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck12"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck12"
				>Checkbox Dark</Label
			>
		</div>
	</div>
</div>
</Col>

<Col md={6}>
<div class="mt-4 mt-md-0">
	<p class="text-muted">
		Use <code>form-check-outline</code>
		class and <code>form-check-</code> class
		with below-mentioned color variation
		to set a color checkbox with outline.
	</p>

	<div>
		<div
			class="form-check form-check-outline form-check-primary mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck13"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck13"
			>
				Checkbox Outline Primary
			</Label>
		</div>
		<div
			class="form-check form-check-outline form-check-secondary mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck14"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck14"
			>
				Checkbox Outline Secondary
			</Label>
		</div>
		<div
			class="form-check form-check-outline form-check-success mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck15"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck15"
			>
				Checkbox Outline Success
			</Label>
		</div>
		<div
			class="form-check form-check-outline form-check-warning mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck16"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck16"
			>
				Checkbox Outline Warning
			</Label>
		</div>
		<div
			class="form-check form-check-outline form-check-danger mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck17"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck17"
			>
				Checkbox Outline Danger
			</Label>
		</div>
		<div
			class="form-check form-check-outline form-check-info mb-3"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck18"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck18"
			>
				Checkbox Outline Info
			</Label>
		</div>
		<div
			class="form-check form-check-outline form-check-dark"
		>
			<input
				class="form-check-input"
				type="checkbox"
				id="formCheck19"
				checked
			/>
			<Label
				class="form-check-label"
				for="formCheck19"
			>
				Checkbox Outline Dark
			</Label>
		</div>
	</div>
</div>
</Col>
`;
  const Radio = `<Col lg={4} md={6}>
<div>
	<p class="text-muted fw-medium">
		Default Radios
	</p>
	<p class="text-muted">
		Use <code>type="radio"</code>
		attribute to set a radio button and add
		<code>checked</code> attribute to set
		a radio checked by default.
	</p>
	<div class="form-check mb-2">
		<input
			class="form-check-input"
			type="radio"
			name="flexRadioDefault"
			id="flexRadioDefault1"
		/>
		<Label
			class="form-check-label"
			for="flexRadioDefault1"
		>
			Default radio
		</Label>
	</div>
	<div class="form-check">
		<input
			class="form-check-input"
			type="radio"
			name="flexRadioDefault"
			id="flexRadioDefault2"
			checked
		/>
		<Label
			class="form-check-label"
			for="flexRadioDefault2"
		>
			Default checked radio
		</Label>
	</div>
</div>
</Col>
<Col lg={4} md={6}>
<div class="mt-4 mt-md-0">
	<p class="text-muted fw-medium">
		Disabled Radios
	</p>
	<p class="text-muted">
		Use <code>disabled</code> attribute
		to set a radio button disabled and
		add
		<code>checked</code> attribute to set
		a radio checked by default.
	</p>
	<div class="form-check mb-2">
		<input
			class="form-check-input"
			type="radio"
			name="flexRadioDisabled"
			id="flexRadioDisabled"
			disabled
		/>
		<Label
			class="form-check-label"
			for="flexRadioDisabled"
		>
			Disabled radio
		</Label>
	</div>
	<div>
		<div class="form-check">
			<input
				class="form-check-input"
				type="radio"
				name="flexRadioDisabled"
				id="flexRadioCheckedDisabled"
				checked
				disabled
			/>
			<Label
				class="form-check-label"
				for="flexRadioCheckedDisabled"
			>
				Disabled checked radio
			</Label>
		</div>
	</div>
</div>
</Col>

<Col lg={4} md={6}>
<div class="mt-4 mt-md-0">
	<p class="text-muted fw-medium">
		Radio Right
	</p>
	<p class="text-muted">
		Use <code>form-check-right</code> class
		to form-check class to set a radio button
		on the right side.
	</p>
	<div
		class="form-check form-check-right mb-2"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradioRight"
			id="formradioRight1"
		/>
		<Label
			class="form-check-label"
			for="formradioRight1"
		>
			Form Radio Right
		</Label>
	</div>
	<div>
		<div
			class="form-check form-check-right"
		>
			<input
				class="form-check-input"
				type="radio"
				value=""
				name="formradioRight"
				id="flexCheckCheckedDisabled2"
				checked
				disabled
			/>
			<Label
				class="form-check-label"
				for="flexCheckCheckedDisabled2"
			>
				Disabled checked radio
			</Label>
		</div>
	</div>
</div>
</Col>
`;
  const CustomRadio = `<Col md={6}>
<div>
	<p class="text-muted">
		Use <code>form-check-</code> class with
		below-mentioned color variation to set
		a color radio.
	</p>

	<div
		class="form-check form-radio-primary mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor1"
			id="formradioRight5"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight5"
		>
			Radio Primary
		</Label>
	</div>

	<div
		class="form-check form-radio-secondary mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor2"
			id="formradioRight6"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight6"
		>
			Radio Secondary
		</Label>
	</div>

	<div
		class="form-check form-radio-success mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor3"
			id="formradioRight7"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight7"
		>
			Radio Success
		</Label>
	</div>

	<div
		class="form-check form-radio-warning mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor4"
			id="formradioRight8"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight8"
		>
			Radio Warning
		</Label>
	</div>

	<div
		class="form-check form-radio-danger mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor5"
			id="formradioRight9"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight9"
			>Radio Danger</Label
		>
	</div>

	<div
		class="form-check form-radio-info mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor6"
			id="formradioRight10"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight10"
			>Radio Info</Label
		>
	</div>

	<div class="form-check form-radio-dark">
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor7"
			id="formradioRight11"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight11"
			>Radio Dark</Label
		>
	</div>
</div>
</Col>

<Col md={6}>
<div class="mt-4 mt-md-0">
	<p class="text-muted">
		Use <code>form-check-outline</code>
		class and <code>form-check-</code> class
		with below-mentioned color variation
		to set a color radio with outline.
	</p>

	<div
		class="form-check form-radio-outline form-radio-primary mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor9"
			id="formradioRight13"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight13"
		>
			Radio Outline Primary
		</Label>
	</div>

	<div
		class="form-check form-radio-outline form-radio-secondary mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor10"
			id="formradioRight14"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight14"
		>
			Radio Outline Secondary
		</Label>
	</div>

	<div
		class="form-check form-radio-outline form-radio-success mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor11"
			id="formradioRight15"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight15"
		>
			Radio Outline Success
		</Label>
	</div>

	<div
		class="form-check form-radio-outline form-radio-warning mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor12"
			id="formradioRight16"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight16"
		>
			Radio Outline Warning
		</Label>
	</div>

	<div
		class="form-check form-radio-outline form-radio-danger mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor13"
			id="formradioRight17"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight17"
		>
			Radio Outline Danger
		</Label>
	</div>

	<div
		class="form-check form-radio-outline form-radio-info mb-3"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor14"
			id="formradioRight18"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight18"
		>
			Radio Outline Info
		</Label>
	</div>

	<div
		class="form-check form-radio-outline form-radio-dark"
	>
		<input
			class="form-check-input"
			type="radio"
			name="formradiocolor15"
			id="formradioRight19"
			checked
		/>
		<Label
			class="form-check-label"
			for="formradioRight19"
		>
			Radio Outline Dark
		</Label>
	</div>
</div>
</Col>
`;
  const Switches = `<Col lg={4} md={6}>
<div>
	<p class="text-muted fw-medium">
		Default Switches
	</p>
	<p class="text-muted">
		Use <code>form-switch</code> class
		to form-check class to set a switch
		and add
		<code>checked</code> attribute to set
		a switch checked by default.
	</p>
	<div
		class="form-check form-switch mb-2"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="flexSwitchCheckDefault"
		/>
		<Label
			class="form-check-label"
			for="flexSwitchCheckDefault"
			>Default switch input</Label
		>
	</div>

	<div class="form-check form-switch">
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="flexSwitchCheckChecked"
			checked
		/>
		<Label
			class="form-check-label"
			for="flexSwitchCheckChecked"
			>Checked switch input</Label
		>
	</div>
</div>
</Col>

<Col lg={4} md={6}>
<div class="mt-4 mt-md-0">
	<p class="text-muted fw-medium">
		Disabled Switches
	</p>
	<p class="text-muted">
		Use <code>disabled</code> attribute
		to set a radio button disabled and
		add
		<code>checked</code> attribute to set
		a switch checked by default.
	</p>
	<div
		class="form-check form-switch mb-2"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="flexSwitchCheckDisabled"
			disabled
		/>
		<Label
			class="form-check-label"
			for="flexSwitchCheckDisabled"
			>Switch input</Label
		>
	</div>

	<div class="form-check form-switch">
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="flexSwitchCheckCheckedDisabled1"
			checked
			disabled
		/>
		<Label
			class="form-check-label"
			for="flexSwitchCheckCheckedDisabled1"
			>Disabled checked switch input</Label
		>
	</div>
</div>
</Col>

<Col lg={4} md={6}>
<div class="mt-4 mt-md-0">
	<p class="text-muted fw-medium">
		Switch Right
	</p>
	<p class="text-muted">
		Use <code>form-check-right</code> class
		to form-check class to set a switch button
		on the right side.
	</p>
	<div>
		<div
			class="form-check form-switch form-check-right mb-2"
		>
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckRightDisabled"
				checked
			/>
			<Label
				class="form-check-label"
				for="flexSwitchCheckRightDisabled"
				>Switch Right input</Label
			>
		</div>
	</div>

	<div>
		<div
			class="form-check form-switch form-check-right"
		>
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckCheckedDisabled2"
				disabled
			/>
			<Label
				class="form-check-label"
				for="flexSwitchCheckCheckedDisabled2"
				>Disabled checked switch
				input</Label
			>
		</div>
	</div>
</div>
</Col>

<Col lg={4} md={6}>
<div class="mt-3">
	<p class="text-muted fw-medium">
		Switch sizes
	</p>
	<p class="text-muted">
		Use <code>form-switch-md</code>
		class to set a medium size switch button
		and
		<code>form-switch-lg</code> class to
		form-check class to set a large size
		switch button respectively. No such class
		is required for small size switch button.
	</p>

	<div
		class="form-check form-switch mb-3"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="customSwitchsizesm"
			checked=""
		/>
		<Label
			class="form-check-label"
			for="customSwitchsizesm"
			>Small Size Switch</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-md mb-3"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="customSwitchsizemd"
		/>
		<Label
			class="form-check-label"
			for="customSwitchsizemd"
			>Medium Size Switch</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-lg"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="customSwitchsizelg"
			checked=""
		/>
		<Label
			class="form-check-label"
			for="customSwitchsizelg"
			>Large Size Switch</Label
		>
	</div>
</div>
</Col>
`;
  const SwitchColor = `<Col md={6}>
<div>
	<div
		class="form-check form-switch mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck1"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck1"
			>Switch Default</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-secondary mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck2"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck2"
			>Switch Secondary</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-success mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck3"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck3"
			>Switch Success</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-warning mb-2 mb-md-0"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck4"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck4"
			>Switch Warning</Label
		>
	</div>
</div>
</Col>

<Col md={6}>
<div>
	<div
		class="form-check form-switch form-switch-danger mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck5"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck5"
			>Switch Danger</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-info mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck6"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck6"
			>Switch Info</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-dark mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck7"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck7"
			>Switch Dark</Label
		>
	</div>
</div>
</Col>
    `;
  const CustomSwitches = `<Col md={6}>
<div>
	<div
		class="form-check form-switch form-switch-custom form-switch-primary mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck9"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck9"
			>Switch Primary</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-custom form-switch-secondary mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck10"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck10"
			>Switch Secondary</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-custom form-switch-success mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck11"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck11"
			>Switch Success</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-custom form-switch-warning mb-2 mb-md-0"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck12"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck12"
			>Switch Warning</Label
		>
	</div>
</div>
</Col>

<Col md={6}>
<div class="mt-4 mt-md-0">
	<div
		class="form-check form-switch form-switch-custom form-switch-danger mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck13"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck13"
			>Switch Danger</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-custom form-switch-info mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck14"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck14"
			>Switch Info</Label
		>
	</div>

	<div
		class="form-check form-switch form-switch-custom form-switch-dark mb-3"
	>
		<input
			class="form-check-input"
			type="checkbox"
			role="switch"
			id="SwitchCheck15"
			checked
		/>
		<Label
			class="form-check-label"
			for="SwitchCheck15"
			>Switch Dark</Label
		>
	</div>
</div>
</Col>
        `;
  const InlineCheckboxRadio = `<Col lg={4}>
<div class="mt-4 mt-lg-0">
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="checkbox"
			id="inlineCheckbox6"
			value="option1"
		/>
		<Label
			class="form-check-label"
			for="inlineCheckbox6">1</Label
		>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="checkbox"
			id="inlineCheckbox7"
			value="option2"
		/>
		<Label
			class="form-check-label"
			for="inlineCheckbox7">2</Label
		>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="checkbox"
			id="inlineCheckbox8"
			value="option3"
			disabled
		/>
		<Label
			class="form-check-label"
			for="inlineCheckbox8"
			>3 (disabled)</Label
		>
	</div>
</div>
</Col>

<Col lg={4}>
<div class="mt-4 mt-lg-0">
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions1"
			id="inlineRadio1"
			value="option1"
		/>
		<Label
			class="form-check-label"
			for="inlineRadio1">1</Label
		>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions2"
			id="inlineRadio2"
			value="option2"
		/>
		<Label
			class="form-check-label"
			for="inlineRadio2">2</Label
		>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions3"
			id="inlineRadio3"
			value="option3"
			disabled
		/>
		<Label
			class="form-check-label"
			for="inlineRadio3"
			>3 (disabled)</Label
		>
	</div>
</div>
</Col>

<Col lg={4}>
<div class="mt-4 mt-lg-0">
	<div
		class="form-check form-switch form-check-inline"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="inlineswitch5"
		/>
		<Label
			class="form-check-label"
			for="inlineswitch5">1</Label
		>
	</div>
	<div
		class="form-check form-switch form-check-inline"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="inlineswitch6"
		/>
		<Label
			class="form-check-label"
			for="inlineswitch6">2</Label
		>
	</div>
	<div
		class="form-check form-switch form-check-inline"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="inlineswitchdisabled2"
			disabled
		/>
		<Label
			class="form-check-label"
			for="inlineswitchdisabled2"
			>2</Label
		>
	</div>
</div>
</Col>
`;
  const WithoutLabels = `<Col lg={4}>
<div class="mt-4 mt-lg-0">
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="checkbox"
			id="inlineCheckbox1"
			value="option1"
		/>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="checkbox"
			id="inlineCheckbox2"
			value="option2"
		/>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="checkbox"
			id="inlineCheckbox3"
			value="option3"
			disabled
		/>
	</div>
</div>
</Col>

<Col lg={4}>
<div class="mt-4 mt-lg-0">
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			id="WithoutinlineRadio1"
			value="option1"
		/>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			id="WithoutinlineRadio2"
			value="option2"
		/>
	</div>
	<div
		class="form-check form-check-inline"
	>
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			id="WithoutinlineRadio3"
			value="option3"
			disabled
		/>
	</div>
</div>
</Col>

<Col lg={4}>
<div class="mt-4 mt-lg-0">
	<div
		class="form-check form-switch form-check-inline"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="inlineswitch"
		/>
	</div>
	<div
		class="form-check form-switch form-check-inline"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="inlineswitch1"
		/>
	</div>
	<div
		class="form-check form-switch form-check-inline"
		dir="ltr"
	>
		<input
			type="checkbox"
			class="form-check-input"
			id="inlineswitchdisabled"
			disabled
		/>
	</div>
</div>
</Col>
`;
  const RadioToggleButtons = `<div class="hstack gap-2 flex-wrap">
<input
	type="radio"
	class="btn-check"
	name="options"
	id="option1"
	checked
/>
<Label class="btn btn-secondary" for="option1"
	>Checked</Label
>

<input
	type="radio"
	class="btn-check"
	name="options"
	id="option2"
/>
<Label class="btn btn-secondary" for="option2"
	>Radio</Label
>

<input
	type="radio"
	class="btn-check"
	name="options"
	id="option3"
	disabled
/>
<Label class="btn btn-secondary" for="option3"
	>Disabled</Label
>

<input
	type="radio"
	class="btn-check"
	name="options"
	id="option4"
/>
<Label class="btn btn-secondary" for="option4"
	>Radio</Label
>
</div>
`;
  const OutlinedStyles = `<div class="hstack gap-2 flex-wrap">
<input
	type="checkbox"
	class="btn-check"
	id="btn-check-outlined"
/>
<Label
	class="btn btn-outline-primary"
	for="btn-check-outlined"
	>Single toggle</Label
>

<input
	type="checkbox"
	class="btn-check"
	id="btn-check-2-outlined"
	checked
/>
<Label
	class="btn btn-outline-secondary"
	for="btn-check-2-outlined">Checked</Label
>

<input
	type="radio"
	class="btn-check"
	name="options-outlined"
	id="success-outlined"
	checked
/>
<Label
	class="btn btn-outline-success"
	for="success-outlined"
	>Checked success radio</Label
>

<input
	type="radio"
	class="btn-check"
	name="options-outlined"
	id="danger-outlined"
/>
<Label
	class="btn btn-outline-danger"
	for="danger-outlined">Danger radio</Label
>
</div>
`;
  return `${$$result.head += `${$$result.title = `<title>Checkboxes &amp; Radio | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Checkbox & Radio",
        pageTitle: "Forms"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Checkbox" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                            default: () => {
                              return `<div><p class="${"text-muted fw-medium"}">Default Checkbox
										</p>
										<p class="${"text-muted"}">Use <code>type=&quot;checkbox&quot;</code>
											attribute to set a checkbox and add
											<code>checked</code> attribute to set
											a checkbox checked by default.
										</p>
										<div class="${"form-check mb-2"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck1"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "formCheck1"
                              }, {}, {
                                default: () => {
                                  return `Default checkbox`;
                                }
                              })}</div>
										<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck2"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "formCheck2"
                              }, {}, {
                                default: () => {
                                  return `Checked checkbox`;
                                }
                              })}</div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted fw-medium"}">Disabled Checkbox
										</p>
										<p class="${"text-muted"}">Use <code>disabled</code> attribute
											to set a checkbox disabled and add
											<code>checked</code> attribute to set
											a checkbox checked by default.
										</p>
										<div><div class="${"form-check form-check-right mb-2"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckDisabled"}" disabled>
												${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexCheckDisabled"
                              }, {}, {
                                default: () => {
                                  return `Disabled checkbox
												`;
                                }
                              })}</div></div>
										<div><div class="${"form-check form-check-right"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckCheckedDisabled"}" checked disabled>
												${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexCheckCheckedDisabled"
                              }, {}, {
                                default: () => {
                                  return `Disabled checked checkbox
												`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted fw-medium"}">Checkbox Right
										</p>
										<p class="${"text-muted"}">Use <code>form-check-right</code> class
											to form-check class to set a checkbox
											on the right side.
										</p>
										<div class="${"form-check form-check-right mb-2"}"><input class="${"form-check-input"}" type="${"checkbox"}" name="${"formCheckboxRight"}" id="${"formCheckboxRight1"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "formCheckboxRight1"
                              }, {}, {
                                default: () => {
                                  return `Form Radio Right
											`;
                                }
                              })}</div>
										<div><div class="${"form-check form-check-right"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"flexCheckCheckedRightDisabled"}" checked disabled>
												${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexCheckCheckedRightDisabled"
                              }, {}, {
                                default: () => {
                                  return `Disabled checked checkbox
												`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-3"}"><p class="${"text-muted fw-medium"}">Indeterminate
										</p>
										<div><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" value="${""}" id="${"defaultIndeterminateCheck"}">
												${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "defaultIndeterminateCheck"
                              }, {}, {
                                default: () => {
                                  return `Indeterminate checkbox
												`;
                                }
                              })}</div></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: Checkbox, id: "formcheckbox" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Checkboxes" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"text-muted"}">Use <code>form-check-</code> class with
											below-mentioned color variation to set
											a color checkbox.
										</p>
										<div><div class="${"form-check mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck6"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck6"
                          }, {}, {
                            default: () => {
                              return `Checkbox Primary
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-secondary mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck7"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck7"
                          }, {}, {
                            default: () => {
                              return `Checkbox Secondary
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-success mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck8"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck8"
                          }, {}, {
                            default: () => {
                              return `Checkbox Success
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-warning mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck9"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck9"
                          }, {}, {
                            default: () => {
                              return `Checkbox Warning
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-danger mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck10"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck10"
                          }, {}, {
                            default: () => {
                              return `Checkbox Danger
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-info mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck11"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck11"
                          }, {}, {
                            default: () => {
                              return `Checkbox Info`;
                            }
                          })}</div>
											<div class="${"form-check form-check-dark"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck12"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck12"
                          }, {}, {
                            default: () => {
                              return `Checkbox Dark`;
                            }
                          })}</div></div></div>`;
                        }
                      })}

								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted"}">Use <code>form-check-outline</code>
											class and <code>form-check-</code> class
											with below-mentioned color variation
											to set a color checkbox with outline.
										</p>

										<div><div class="${"form-check form-check-outline form-check-primary mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck13"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck13"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Primary
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-outline form-check-secondary mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck14"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck14"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Secondary
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-outline form-check-success mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck15"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck15"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Success
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-outline form-check-warning mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck16"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck16"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Warning
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-outline form-check-danger mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck17"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck17"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Danger
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-outline form-check-info mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck18"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck18"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Info
												`;
                            }
                          })}</div>
											<div class="${"form-check form-check-outline form-check-dark"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"formCheck19"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formCheck19"
                          }, {}, {
                            default: () => {
                              return `Checkbox Outline Dark
												`;
                            }
                          })}</div></div></div>`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                    code: CustomCheckbox,
                    id: "CustomCheckbox"
                  }, {}, {})}</div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Radios" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                            default: () => {
                              return `<div><p class="${"text-muted fw-medium"}">Default Radios
										</p>
										<p class="${"text-muted"}">Use <code>type=&quot;radio&quot;</code>
											attribute to set a radio button and add
											<code>checked</code> attribute to set
											a radio checked by default.
										</p>
										<div class="${"form-check mb-2"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"flexRadioDefault"}" id="${"flexRadioDefault1"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexRadioDefault1"
                              }, {}, {
                                default: () => {
                                  return `Default radio
											`;
                                }
                              })}</div>
										<div class="${"form-check"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"flexRadioDefault"}" id="${"flexRadioDefault2"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexRadioDefault2"
                              }, {}, {
                                default: () => {
                                  return `Default checked radio
											`;
                                }
                              })}</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted fw-medium"}">Disabled Radios
										</p>
										<p class="${"text-muted"}">Use <code>disabled</code> attribute
											to set a radio button disabled and
											add
											<code>checked</code> attribute to set
											a radio checked by default.
										</p>
										<div class="${"form-check mb-2"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"flexRadioDisabled"}" id="${"flexRadioDisabled"}" disabled>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexRadioDisabled"
                              }, {}, {
                                default: () => {
                                  return `Disabled radio
											`;
                                }
                              })}</div>
										<div><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"flexRadioDisabled"}" id="${"flexRadioCheckedDisabled"}" checked disabled>
												${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexRadioCheckedDisabled"
                              }, {}, {
                                default: () => {
                                  return `Disabled checked radio
												`;
                                }
                              })}</div></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted fw-medium"}">Radio Right
										</p>
										<p class="${"text-muted"}">Use <code>form-check-right</code> class
											to form-check class to set a radio button
											on the right side.
										</p>
										<div class="${"form-check form-check-right mb-2"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradioRight"}" id="${"formradioRight1"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "formradioRight1"
                              }, {}, {
                                default: () => {
                                  return `Form Radio Right
											`;
                                }
                              })}</div>
										<div><div class="${"form-check form-check-right"}"><input class="${"form-check-input"}" type="${"radio"}" value="${""}" name="${"formradioRight"}" id="${"flexCheckCheckedDisabled2"}" checked disabled>
												${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "flexCheckCheckedDisabled2"
                              }, {}, {
                                default: () => {
                                  return `Disabled checked radio
												`;
                                }
                              })}</div></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: Radio, id: "fromRadio" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Radio" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"text-muted"}">Use <code>form-check-</code> class with
											below-mentioned color variation to set
											a color radio.
										</p>

										<div class="${"form-check form-radio-primary mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor1"}" id="${"formradioRight5"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight5"
                          }, {}, {
                            default: () => {
                              return `Radio Primary
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-secondary mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor2"}" id="${"formradioRight6"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight6"
                          }, {}, {
                            default: () => {
                              return `Radio Secondary
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-success mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor3"}" id="${"formradioRight7"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight7"
                          }, {}, {
                            default: () => {
                              return `Radio Success
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-warning mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor4"}" id="${"formradioRight8"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight8"
                          }, {}, {
                            default: () => {
                              return `Radio Warning
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-danger mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor5"}" id="${"formradioRight9"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight9"
                          }, {}, {
                            default: () => {
                              return `Radio Danger`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-info mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor6"}" id="${"formradioRight10"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight10"
                          }, {}, {
                            default: () => {
                              return `Radio Info`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-dark"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor7"}" id="${"formradioRight11"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight11"
                          }, {}, {
                            default: () => {
                              return `Radio Dark`;
                            }
                          })}</div></div>`;
                        }
                      })}

								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted"}">Use <code>form-check-outline</code>
											class and <code>form-check-</code> class
											with below-mentioned color variation
											to set a color radio with outline.
										</p>

										<div class="${"form-check form-radio-outline form-radio-primary mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor9"}" id="${"formradioRight13"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight13"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Primary
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-outline form-radio-secondary mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor10"}" id="${"formradioRight14"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight14"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Secondary
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-outline form-radio-success mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor11"}" id="${"formradioRight15"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight15"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Success
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-outline form-radio-warning mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor12"}" id="${"formradioRight16"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight16"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Warning
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-outline form-radio-danger mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor13"}" id="${"formradioRight17"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight17"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Danger
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-outline form-radio-info mb-3"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor14"}" id="${"formradioRight18"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight18"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Info
											`;
                            }
                          })}</div>

										<div class="${"form-check form-radio-outline form-radio-dark"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"formradiocolor15"}" id="${"formradioRight19"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "formradioRight19"
                          }, {}, {
                            default: () => {
                              return `Radio Outline Dark
											`;
                            }
                          })}</div></div>`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: CustomRadio, id: "CustomRadio" }, {}, {})}</div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Switches" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div><p class="${"text-muted fw-medium"}">Default Switches
										</p>
										<p class="${"text-muted"}">Use <code>form-switch</code> class
											to form-check class to set a switch
											and add
											<code>checked</code> attribute to set
											a switch checked by default.
										</p>
										<div class="${"form-check form-switch mb-2"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"flexSwitchCheckDefault"}">
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "flexSwitchCheckDefault"
                          }, {}, {
                            default: () => {
                              return `Default switch input`;
                            }
                          })}</div>

										<div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"flexSwitchCheckChecked"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "flexSwitchCheckChecked"
                          }, {}, {
                            default: () => {
                              return `Checked switch input`;
                            }
                          })}</div></div>`;
                        }
                      })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted fw-medium"}">Disabled Switches
										</p>
										<p class="${"text-muted"}">Use <code>disabled</code> attribute
											to set a radio button disabled and
											add
											<code>checked</code> attribute to set
											a switch checked by default.
										</p>
										<div class="${"form-check form-switch mb-2"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"flexSwitchCheckDisabled"}" disabled>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "flexSwitchCheckDisabled"
                          }, {}, {
                            default: () => {
                              return `Switch input`;
                            }
                          })}</div>

										<div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"flexSwitchCheckCheckedDisabled1"}" checked disabled>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "flexSwitchCheckCheckedDisabled1"
                          }, {}, {
                            default: () => {
                              return `Disabled checked switch input`;
                            }
                          })}</div></div>`;
                        }
                      })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mt-4 mt-md-0"}"><p class="${"text-muted fw-medium"}">Switch Right
										</p>
										<p class="${"text-muted"}">Use <code>form-check-right</code> class
											to form-check class to set a switch button
											on the right side.
										</p>
										<div><div class="${"form-check form-switch form-check-right mb-2"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"flexSwitchCheckRightDisabled"}" checked>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "flexSwitchCheckRightDisabled"
                          }, {}, {
                            default: () => {
                              return `Switch Right input`;
                            }
                          })}</div></div>

										<div><div class="${"form-check form-switch form-check-right"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"flexSwitchCheckCheckedDisabled2"}" disabled>
												${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "flexSwitchCheckCheckedDisabled2"
                          }, {}, {
                            default: () => {
                              return `Disabled checked switch
													input`;
                            }
                          })}</div></div></div>`;
                        }
                      })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4, md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mt-3"}"><p class="${"text-muted fw-medium"}">Switch sizes
										</p>
										<p class="${"text-muted"}">Use <code>form-switch-md</code>
											class to set a medium size switch button
											and
											<code>form-switch-lg</code> class to
											form-check class to set a large size
											switch button respectively. No such class
											is required for small size switch button.
										</p>

										<div class="${"form-check form-switch mb-3"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"customSwitchsizesm"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "customSwitchsizesm"
                          }, {}, {
                            default: () => {
                              return `Small Size Switch`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-md mb-3"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"customSwitchsizemd"}">
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "customSwitchsizemd"
                          }, {}, {
                            default: () => {
                              return `Medium Size Switch`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-lg"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"customSwitchsizelg"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "customSwitchsizelg"
                          }, {}, {
                            default: () => {
                              return `Large Size Switch`;
                            }
                          })}</div></div>`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: Switches, id: "fromSwitches" }, {}, {})}</div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Switches Color" }, {}, {})}

					<div class="${"card-body"}"><p class="${"text-muted"}">Use <code>form-check-</code> class with below-mentioned
							color variation to set a color switch.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                    default: () => {
                      return `<div><div class="${"form-check form-switch mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck1"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck1"
                      }, {}, {
                        default: () => {
                          return `Switch Default`;
                        }
                      })}</div>

										<div class="${"form-check form-switch form-switch-secondary mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck2"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck2"
                      }, {}, {
                        default: () => {
                          return `Switch Secondary`;
                        }
                      })}</div>

										<div class="${"form-check form-switch form-switch-success mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck3"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck3"
                      }, {}, {
                        default: () => {
                          return `Switch Success`;
                        }
                      })}</div>

										<div class="${"form-check form-switch form-switch-warning mb-2 mb-md-0"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck4"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck4"
                      }, {}, {
                        default: () => {
                          return `Switch Warning`;
                        }
                      })}</div></div>`;
                    }
                  })}

								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                    default: () => {
                      return `<div><div class="${"form-check form-switch form-switch-danger mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck5"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck5"
                      }, {}, {
                        default: () => {
                          return `Switch Danger`;
                        }
                      })}</div>

										<div class="${"form-check form-switch form-switch-info mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck6"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck6"
                      }, {}, {
                        default: () => {
                          return `Switch Info`;
                        }
                      })}</div>

										<div class="${"form-check form-switch form-switch-dark mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck7"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                        class: "form-check-label",
                        for: "SwitchCheck7"
                      }, {}, {
                        default: () => {
                          return `Switch Dark`;
                        }
                      })}</div></div>`;
                    }
                  })}`;
                }
              })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: SwitchColor, id: "SwitchColor" }, {}, {})}</div></div>`;
            }
          })}</div>`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-12"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Custom Switches" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"text-muted"}">Use <code>form-switch-custom</code> class &amp;
							<code>form-switch-</code> class with below-mentioned
							color variation to set a color radius.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div><div class="${"form-check form-switch form-switch-custom form-switch-primary mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck9"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck9"
                          }, {}, {
                            default: () => {
                              return `Switch Primary`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-custom form-switch-secondary mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck10"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck10"
                          }, {}, {
                            default: () => {
                              return `Switch Secondary`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-custom form-switch-success mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck11"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck11"
                          }, {}, {
                            default: () => {
                              return `Switch Success`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-custom form-switch-warning mb-2 mb-md-0"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck12"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck12"
                          }, {}, {
                            default: () => {
                              return `Switch Warning`;
                            }
                          })}</div></div>`;
                        }
                      })}

								${validate_component(Col, "Col").$$render($$result, { md: 6 }, {}, {
                        default: () => {
                          return `<div class="${"mt-4 mt-md-0"}"><div class="${"form-check form-switch form-switch-custom form-switch-danger mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck13"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck13"
                          }, {}, {
                            default: () => {
                              return `Switch Danger`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-custom form-switch-info mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck14"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck14"
                          }, {}, {
                            default: () => {
                              return `Switch Info`;
                            }
                          })}</div>

										<div class="${"form-check form-switch form-switch-custom form-switch-dark mb-3"}"><input class="${"form-check-input"}" type="${"checkbox"}" role="${"switch"}" id="${"SwitchCheck15"}" checked>
											${validate_component(Label, "Label").$$render($$result, {
                            class: "form-check-label",
                            for: "SwitchCheck15"
                          }, {}, {
                            default: () => {
                              return `Switch Dark`;
                            }
                          })}</div></div>`;
                        }
                      })}`;
                    }
                  })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                    code: CustomSwitches,
                    id: "CustomSwitches"
                  }, {}, {})}</div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Inline Checkbox & Radios" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>form-check-inline</code> class to form-check
							class to set horizontally align checkboxes, radios, or
							switches.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox6"}" value="${"option1"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineCheckbox6"
                              }, {}, {
                                default: () => {
                                  return `1`;
                                }
                              })}</div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox7"}" value="${"option2"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineCheckbox7"
                              }, {}, {
                                default: () => {
                                  return `2`;
                                }
                              })}</div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox8"}" value="${"option3"}" disabled>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineCheckbox8"
                              }, {}, {
                                default: () => {
                                  return `3 (disabled)`;
                                }
                              })}</div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions1"}" id="${"inlineRadio1"}" value="${"option1"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineRadio1"
                              }, {}, {
                                default: () => {
                                  return `1`;
                                }
                              })}</div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions2"}" id="${"inlineRadio2"}" value="${"option2"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineRadio2"
                              }, {}, {
                                default: () => {
                                  return `2`;
                                }
                              })}</div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions3"}" id="${"inlineRadio3"}" value="${"option3"}" disabled>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineRadio3"
                              }, {}, {
                                default: () => {
                                  return `3 (disabled)`;
                                }
                              })}</div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><div class="${"form-check form-switch form-check-inline"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"inlineswitch5"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineswitch5"
                              }, {}, {
                                default: () => {
                                  return `1`;
                                }
                              })}</div>
										<div class="${"form-check form-switch form-check-inline"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"inlineswitch6"}">
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineswitch6"
                              }, {}, {
                                default: () => {
                                  return `2`;
                                }
                              })}</div>
										<div class="${"form-check form-switch form-check-inline"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"inlineswitchdisabled2"}" disabled>
											${validate_component(Label, "Label").$$render($$result, {
                                class: "form-check-label",
                                for: "inlineswitchdisabled2"
                              }, {}, {
                                default: () => {
                                  return `2`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: InlineCheckboxRadio,
                        id: "InlineCheckboxRadio"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}

		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Without Labels" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Omit the wrapping, <code>form-check</code> class for
							checkboxes, radios, or switches that have no label text.
							Remember to still provide some form of accessible name
							for assistive technologies (for instance, using aria-label).
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox1"}" value="${"option1"}"></div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox2"}" value="${"option2"}"></div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"inlineCheckbox3"}" value="${"option3"}" disabled></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions"}" id="${"WithoutinlineRadio1"}" value="${"option1"}"></div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions"}" id="${"WithoutinlineRadio2"}" value="${"option2"}"></div>
										<div class="${"form-check form-check-inline"}"><input class="${"form-check-input"}" type="${"radio"}" name="${"inlineRadioOptions"}" id="${"WithoutinlineRadio3"}" value="${"option3"}" disabled></div></div>`;
                            }
                          })}

								${validate_component(Col, "Col").$$render($$result, { lg: 4 }, {}, {
                            default: () => {
                              return `<div class="${"mt-4 mt-lg-0"}"><div class="${"form-check form-switch form-check-inline"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"inlineswitch"}"></div>
										<div class="${"form-check form-switch form-check-inline"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"inlineswitch1"}"></div>
										<div class="${"form-check form-switch form-check-inline"}" dir="${"ltr"}"><input type="${"checkbox"}" class="${"form-check-input"}" id="${"inlineswitchdisabled"}" disabled></div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: WithoutLabels, id: "WithoutLabels" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Radio Toggle Buttons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Create button-like checkboxes and radio buttons by
							using <code>btn</code> styles rather than
							form-check-label class on the &lt;label&gt;
							elements. These toggle buttons can further be
							grouped in a
							<a href="${"/getbootstrap.com/docs/5.1/components/button-group/"}">button group</a> if needed.
						</p>
						<div class="${"live-preview"}"><div class="${"hstack gap-2 flex-wrap"}"><input type="${"radio"}" class="${"btn-check"}" name="${"options"}" id="${"option1"}" checked>
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-secondary",
                        for: "option1"
                      }, {}, {
                        default: () => {
                          return `Checked`;
                        }
                      })}

								<input type="${"radio"}" class="${"btn-check"}" name="${"options"}" id="${"option2"}">
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-secondary",
                        for: "option2"
                      }, {}, {
                        default: () => {
                          return `Radio`;
                        }
                      })}

								<input type="${"radio"}" class="${"btn-check"}" name="${"options"}" id="${"option3"}" disabled>
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-secondary",
                        for: "option3"
                      }, {}, {
                        default: () => {
                          return `Disabled`;
                        }
                      })}

								<input type="${"radio"}" class="${"btn-check"}" name="${"options"}" id="${"option4"}">
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-secondary",
                        for: "option4"
                      }, {}, {
                        default: () => {
                          return `Radio`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: RadioToggleButtons,
                        id: "RadioToggleButtons"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { lg: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Outlined Styles" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Different variants of <code>btn</code> attribute, such
							as the various outlined styles, are supported.
						</p>
						<div class="${"live-preview"}"><div class="${"hstack gap-2 flex-wrap"}"><input type="${"checkbox"}" class="${"btn-check"}" id="${"btn-check-outlined"}">
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-outline-primary",
                        for: "btn-check-outlined"
                      }, {}, {
                        default: () => {
                          return `Single toggle`;
                        }
                      })}

								<input type="${"checkbox"}" class="${"btn-check"}" id="${"btn-check-2-outlined"}" checked>
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-outline-secondary",
                        for: "btn-check-2-outlined"
                      }, {}, {
                        default: () => {
                          return `Checked`;
                        }
                      })}

								<input type="${"radio"}" class="${"btn-check"}" name="${"options-outlined"}" id="${"success-outlined"}" checked>
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-outline-success",
                        for: "success-outlined"
                      }, {}, {
                        default: () => {
                          return `Checked success radio`;
                        }
                      })}

								<input type="${"radio"}" class="${"btn-check"}" name="${"options-outlined"}" id="${"danger-outlined"}">
								${validate_component(Label, "Label").$$render($$result, {
                        class: "btn btn-outline-danger",
                        for: "danger-outlined"
                      }, {}, {
                        default: () => {
                          return `Danger radio`;
                        }
                      })}</div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: OutlinedStyles,
                        id: "OutlinedStyles"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export { Forms_checkboxes_radios as default };
