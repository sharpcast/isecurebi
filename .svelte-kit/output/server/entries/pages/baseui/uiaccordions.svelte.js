import { c as create_ssr_component, v as validate_component, b as escape } from "../../../chunks/index-584434b3.js";
import { C as Collapse } from "../../../chunks/Collapse-6781eb46.js";
import { B as Button } from "../../../chunks/Button-ba828d9c.js";
import { C as Card } from "../../../chunks/Card-f8372b29.js";
import { C as CardBody } from "../../../chunks/CardBody-1c493a94.js";
import { C as Col } from "../../../chunks/Col-cf9b7547.js";
import { C as Container } from "../../../chunks/Container-157811c5.js";
import "../../../chunks/Offcanvas.svelte_svelte_type_style_lang-0a4a6cc1.js";
import { R as Row } from "../../../chunks/Row-089822f8.js";
import { L as Link } from "../../../chunks/Link-71b36253.js";
import { B as BreadCrumb } from "../../../chunks/BreadCrumb-c1da1747.js";
import { P as PreviewCardHeader } from "../../../chunks/PreviewCardHeader-2d4cc9f7.js";
import { U as UiContent } from "../../../chunks/UiContent-4b674189.js";
import { P as Prism } from "../../../chunks/Prism-c9306ada.js";
import "../../../chunks/CardHeader-84e061db.js";
const Uiaccordions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultAccordionCode = `<!-- Base Example -->
<div class="live-preview">
	<div
		class="accordion"
		id="default-accordion-example"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingOne"
			>
				<button
					id="collapseOne"
					class="accordion-button"
				>
					How to create a group booking ?
				</button>
			</h2>

			<Collapse
				class="accordion-collapse"
				toggler="#collapseOne"
				isOpen
			>
				<div class="accordion-body">
					Although you probably won\u2019t get into
					any legal trouble if you do it just
					once, why risk it? If you made your
					subscribers a promise, you should
					honor that. If not, you run the risk
					of a drastic increase in opt outs,
					which will only hurt you in the long
					run.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingTwo"
			>
				<button
					id="collapseTwo"
					class="accordion-button"
					type="button"
					style="cursor: pointer"
				>
					Why do we use it ?
				</button>
			</h2>

			<Collapse
				class="accordion-collapse"
				toggler="#collapseTwo"
			>
				<div class="accordion-body">
					No charges are put in place by
					SlickText when subscribers join your
					text list. This does not mean
					however that charges 100% will not
					occur. Charges that may occur fall
					under part of the compliance
					statement stating "Message and Data
					rates may apply."
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingThree"
			>
				<button
					type="button"
					id="collapseThree"
					class="accordion-button"
					style="cursor: pointer"
				>
					Where does it come from ?
				</button>
			</h2>
			<Collapse
				class="accordion-collapse"
				toggler="#collapseThree"
			>
				<div class="accordion-body">
					Now that you have a general idea of
					the amount of texts you will need
					per month, simply find a plan size
					that allows you to have this
					allotment, plus some extra for
					growth. Don't worry, there are no
					mistakes to be made here. You can
					always upgrade and downgrade.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const flushAccordionCode = `
<!-- Accordion Flush Example -->
<div class="live-preview">
	<div
		class="accordion"
		id="default-accordion-example"
		flush
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingOne"
			>
				<button
					class="accordion-button"
					type="button"
					style="cursor: pointer"
					id="collapseFlushOne"
				>
					How do I set up my profile ?
				</button>
			</h2>

			<Collapse
				class="accordion-collapse"
				href="#collapseFlushOne"
				isOpen
			>
				<div class="accordion-body">
					The renewal of your SlickText
					service happens on the anniversary
					of your original paid sign up date.
					Upgrading in the middle of your
					billing period will not change the
					billing date. Upgrading does however
					force an immediate, pro-rated charge
					to take place on your account.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingTwo"
			>
				<button
					class="accordion-button"
					id="collapseFlushTwo"
					type="button"
					style="cursor: pointer"
				>
					What can I do with my project ?
				</button>
			</h2>

			<Collapse
				class="accordion-collapse"
				toggler="#collapseFlushTwo"
			>
				<div class="accordion-body">
					If you had signed up on a free
					account with Slicktext, then
					upgraded to a paid plan at a later
					date, your bill will renew based on
					the date you had upgraded to a paid
					plan. All invoices are able to be
					viewed under your plan options in
					your SlickText account.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingThree"
			>
				<button
					class="accordion-button"
					id="collapseFlushThree"
					type="button"
					style="cursor: pointer"
				>
					Where can I go to edit voice
					settings
				</button>
			</h2>
			<Collapse
				class="accordion-collapse"
				toggler="#collapseFlushThree"
			>
				<div class="accordion-body">
					No, we cannot provide this
					information. Opting out from a list
					is an anonymous, private act. This
					prevents further harassment.
					Providing this information is
					considered bad practice, and further
					communication after they opt out
					would be considered against
					compliance.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const iconAccordionCode = `
<!-- Accordions with Icons -->
<div class="live-preview">
	<div
		class="custom-accordionwithicon accordion-secondary"
		id="accordionWithicon"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingOne"
			>
				<button
					class="accordion-button"
					id="collapseIconOne"
					type="button"
					style="cursor: pointer"
				>
					<i class="ri-global-line me-2" /> How
					Does Age Verification Work?
				</button>
			</h2>

			<Collapse
				class="accordion-collapse"
				toggler="#collapseIconOne"
				isOpen
			>
				<div class="accordion-body">
					Increase or decrease the letter
					spacing depending on the situation
					and try, try again until it looks
					right, and each assumenda labore aes
					Homo nostrud organic, assumenda
					labore aesthetic magna elements,
					buttons, everything.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingTwo"
			>
				<button
					class="accordion-button"
					id="collapseIconTwo"
					type="button"
					style="cursor: pointer"
				>
					<i
						class="ri-user-location-line me-2"
					/> How Does Link Tracking Work?
				</button>
			</h2>

			<Collapse
				class="accordion-collapse"
				toggler="#collapseIconTwo"
			>
				<div class="accordion-body">
					Nullam quis ante. Etiam sit amet
					orci eget eros faucibus tincidunt.
					Duis leo. Sed fringilla mauris sit
					amet nibh. Donec sodales sagittis
					magna. Sed consequat, leo eget
					bibendum sodales, augue velit cursus
					nunc, quis gravida magna mi a
					libero. Fusce vulputate eleifend
					sapien.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingThree"
			>
				<button
					class="accordion-button"
					id="collapseIconThree"
					type="button"
					style="cursor: pointer"
				>
					<i class="ri-pen-nib-line me-2" /> How
					Do I Set Up the Drip Feature?
				</button>
			</h2>
			<Collapse
				class="accordion-collapse"
				toggler="#collapseIconThree"
			>
				<div class="accordion-body">
					Cras ultricies mi eu turpis
					hendrerit fringilla. Vestibulum ante
					ipsum primis in faucibus orci luctus
					et ultrices posuere cubilia Curae;
					In ac dui quis mi consectetuer
					lacinia. Nam pretium turpis et arcu
					arcu tortor, suscipit eget,
					imperdiet nec, imperdiet iaculis
					aliquam ultrices mauris.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const withIconAccordionCode = `
<!-- Accordions without Icons -->

<div class="live-preview">
	<div
		class="accordion accordion-icon-none"
		id="accordionWithouticon"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionwithouticonExample1"
			>
				<button
					class="accordion-button"
					id="collapseWithoutIconOne"
					type="button"
					style="cursor: pointer"
				>
					<i class="ri-global-line me-2" /> How
					Does Age Verification Work?
				</button>
			</h2>

			<Collapse
				toggler="#collapseWithoutIconOne"
				class="accordion-collapse"
				id="accor_withouticoncollapse1"
				isOpen
			>
				<div class="accordion-body">
					Each design is a new, unique piece
					of art birthed into this world, and
					while you have the opportunity to be
					creative and make your own style
					choices. For that very reason, I
					went on a quest and spoke to many
					different professional graphic
					designers.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionwithouticonExample2"
			>
				<button
					class="accordion-button"
					id="collapseWithoutIconTwo"
					type="button"
					style="cursor: pointer"
				>
					<i
						class="ri-user-location-line me-2"
					/> How Does Link Tracking Work?
				</button>
			</h2>

			<Collapse
				toggler="#collapseWithoutIconTwo"
				class="accordion-collapse"
				id="accor_withouticoncollapse2"
			>
				<div class="accordion-body">
					When, while the lovely valley teems
					with vapour around me, and the
					meridian sun strikes the upper
					surface of the impenetrable foliage
					of my trees, and but a few stray
					gleams steal into the inner
					sanctuary, I throw myself down among
					the tall grass by the trickling
					stream; and, as I lie close to the
					earth, a thousand unknown.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionwithouticonExample3"
			>
				<button
					class="accordion-button"
					id="collapseWithoutIconThree"
					type="button"
					style="cursor: pointer"
				>
					<i class="ri-pen-nib-line me-2" /> How
					Do I Set Up the Drip Feature?
				</button>
			</h2>
			<Collapse
				toggler="collapseWithoutIconThree"
				class="accordion-collapse"
				id="accor_withouticoncollapse3"
			>
				<div class="accordion-body">
					Cras ultricies mi eu turpis
					hendrerit fringilla. Vestibulum ante
					ipsum primis in faucibus orci luctus
					et ultrices posuere cubilia Curae;
					In ac dui quis mi consectetuer
					lacinia. Nam pretium turpis et arcu
					arcu tortor, suscipit eget,
					imperdiet nec, imperdiet iaculis
					aliquam ultrices mauris.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const plusIconAccordionCode = `
<!-- Accordions with Plus Icon -->
<div class="live-preview">
	<div
		class="accordion custom-accordionwithicon-plus"
		id="accordionWithplusicon"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionwithouticonExample1"
			>
				<button
					class="accordion-button"
					id="collapseWithplusIconOne"
					type="button"
					style="cursor: pointer"
				>
					What is User Interface Design?
				</button>
			</h2>

			<Collapse
				toggler="#collapseWithplusIconOne"
				class="accordion-collapse"
				id="accor_plusExamplecollapse1"
				isOpen
			>
				<div class="accordion-body">
					Big July earthquakes confound zany
					experimental vow. My girl wove six
					dozen plaid jackets before she quit.
					Six big devils from Japan quickly
					forgot how to waltz. try again until
					it looks right, and each assumenda
					labore aes Homo nostrud organic,
					assumenda labore aesthetic magna
					elements, buttons, everything.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionwithplusExample2"
			>
				<button
					class="accordion-button"
					id="collapseWithplusIconTwo"
					type="button"
					style="cursor: pointer"
				>
					What is Digital Marketing?
				</button>
			</h2>

			<Collapse
				toggler="#collapseWithplusIconTwo"
				class="accordion-collapse"
				id="accor_plusExamplecollapse2"
			>
				<div class="accordion-body">
					It makes a statement, it\u2019s
					impressive graphic design. Increase
					or decrease the letter spacing
					depending on the situation and try,
					try again until it looks right, and
					each letter has the perfect spot of
					its own. commodo enim craft beer
					mlkshk aliquip jean shorts ullamco.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionwithplusExample3"
			>
				<button
					class="accordion-button"
					id="collapseWithplusIconThree"
					type="button"
					style="cursor: pointer"
				>
					Where does it come from ?
				</button>
			</h2>
			<Collapse
				toggler="#collapseWithplusIconThree"
				class="accordion-collapse"
				id="accor_plusExamplecollapse3"
			>
				<div class="accordion-body">
					Spacing depending on the situation
					and try, try again until it looks
					right, and each. next level wes
					anderson artisan four loko
					farm-to-table craft beer twee.
					commodo enim craft beer mlkshk
					aliquip jean shorts ullamco. omo
					nostrud organic, assumenda labore
					aesthetic magna delectus. pposites
					attract, and that\u2019s a fact.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const leftIconAccordionCode = `
<!-- Left Icon Accordions -->
<div class="live-preview">
	<div
		class="lefticon-accordion custom-accordionwithicon accordion-border-box"
		id="accordionlefticon"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionlefticonExample1"
			>
				<button
					class="accordion-button"
					id="collapseLeftIconOne"
					type="button"
					style="cursor: pointer"
				>
					What is User Interface Design?
				</button>
			</h2>

			<Collapse
				toggler="#collapseLeftIconOne"
				class="accordion-collapse"
				id="accor_lefticonExamplecollapse1"
				isOpen
			>
				<div class="accordion-body">
					Anim pariatur cliche reprehenderit,
					enim eiusmod high life accusamus
					terry richardson ad squid. 3 wolf
					moon officia aute, non cupidatat
					skateboard dolor brunch. Food truck
					quinoa nesciunt laborum eiusmod.
					Brunch 3 wolf moon tempor, sunt
					aliqua nulla assumenda shoreditch
					et.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionlefticonExample2"
			>
				<button
					class="accordion-button"
					id="collapseLeftIconTwo"
					type="button"
					style="cursor: pointer"
				>
					What is Digital Marketing?
				</button>
			</h2>

			<Collapse
				toggler="#collapseLeftIconTwo"
				class="accordion-collapse"
				id="accor_lefticonExamplecollapse2"
			>
				<div class="accordion-body">
					Nullam quis ante. Etiam sit amet
					orci eget eros faucibus tincidunt.
					Duis leo. Sed fringilla mauris sit
					amet nibh. Donec sodales sagittis
					magna. Sed consequat, leo eget
					bibendum sodales, augue velit cursus
					nunc, quis gravida magna mi a
					libero. Fusce vulputate eleifend
					sapien.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionlefticonExample3"
			>
				<button
					class="accordion-button"
					id="collapseLeftIconthree"
					type="button"
					style="cursor: pointer"
				>
					Where does it come from ?
				</button>
			</h2>
			<Collapse
				toggler="#collapseLeftIconthree"
				class="accordion-collapse"
				id="accor_lefticonExamplecollapse3"
			>
				<div class="accordion-body">
					Cras ultricies mi eu turpis
					hendrerit fringilla. Vestibulum ante
					ipsum primis in faucibus orci luctus
					et ultrices posuere cubilia Curae;
					In ac dui quis mi consectetuer
					lacinia. Nam pretium turpis et arcu
					arcu tortor, suscipit eget,
					imperdiet nec, imperdiet iaculis
					aliquam ultrices mauris.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const borderedAccordionCode = `
<!-- Accordions Bordered -->
<div class="live-preview">
	<div
		class="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
		id="accordionBordered"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionborderedExample1"
			>
				<button
					class="accordion-button"
					id="collapseBorderOne"
					type="button"
					style="cursor: pointer"
				>
					What is User Interface Design?
				</button>
			</h2>

			<Collapse
				toggler="#collapseBorderOne"
				class="accordion-collapse"
				id="accor_borderedExamplecollapse1"
				isOpen
			>
				<div class="accordion-body">
					Anim pariatur cliche reprehenderit,
					enim eiusmod high life accusamus
					terry richardson ad squid. 3 wolf
					moon officia aute, non cupidatat
					skateboard dolor brunch. Food truck
					quinoa nesciunt laborum eiusmod.
					Brunch 3 wolf moon tempor, sunt
					aliqua nulla assumenda shoreditch
					et.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionborderedExample2"
			>
				<button
					class="accordion-button"
					id="collapseBorderTwo"
					type="button"
					style="cursor: pointer"
				>
					What is Digital Marketing?
				</button>
			</h2>

			<Collapse
				toggler="#collapseBorderTwo"
				class="accordion-collapse"
				id="accor_borderedExamplecollapse2"
			>
				<div class="accordion-body">
					Nullam quis ante. Etiam sit amet
					orci eget eros faucibus tincidunt.
					Duis leo. Sed fringilla mauris sit
					amet nibh. Donec sodales sagittis
					magna. Sed consequat, leo eget
					bibendum sodales, augue velit cursus
					nunc, quis gravida magna mi a
					libero. Fusce vulputate eleifend
					sapien.
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionborderedExample3"
			>
				<button
					class="accordion-button"
					id="collapseBorderThree"
					type="button"
					style="cursor: pointer"
				>
					Where does it come from ?
				</button>
			</h2>
			<Collapse
				toggler="#collapseBorderThree"
				class="accordion-collapse"
				id="accor_borderedExamplecollapse3"
			>
				<div class="accordion-body">
					Cras ultricies mi eu turpis
					hendrerit fringilla. Vestibulum ante
					ipsum primis in faucibus orci luctus
					et ultrices posuere cubilia Curae;
					In ac dui quis mi consectetuer
					lacinia. Nam pretium turpis et arcu
					arcu tortor, suscipit eget,
					imperdiet nec, imperdiet iaculis
					aliquam ultrices mauris.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const nestingAccordionCode = `
<!-- Nesting Accordions -->

<div class="live-preview">
	<div
		class="custom-accordionwithicon accordion-border-box"
		id="accordionnesting"
	>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="accordionnestingExample1"
			>
				<button
					class="accordion-button"
					id="collapseNestingOne"
					type="button"
					style="cursor: pointer"
				>
					How Do I Add Contacts/Subscribers?
				</button>
			</h2>

			<Collapse
				toggler="#collapseNestingOne"
				class="accordion-collapse"
				id="accor_nestingExamplecollapse1"
				isOpen
			>
				<div class="accordion-body">
					This opt in method is perfect for
					those looking to integrate a
					different software such Shopify or
					Hubspot with Slicktext. For example,
					upon cashing out online, a
					subscriber may submit to have their
					mobile number to receive marketing
					messages. The API will pass this
					information from said software over
					to Slicktext via API integration.
					<div class="accordion nesting2-accordion custom-accordionwithicon accordion-border-box mt-3"
						id="accordionnesting2">
						<div class="accordion-item">
							<h2
								class="accordion-header"
								id="accordionnesting2Example1">
								<button
									class="accordion-button"
									id="collapseAccorNesting2One"
									type="button"
									style="cursor: pointer"
								>
									How Do I Search For
									Contacts?
								</button>
							</h2>

							<Collapse
								toggler="#collapseAccorNesting2One"
								class="accordion-collapse"
								id="accor_nesting2Examplecollapse1"
								isOpen>
								<div class="accordion-body"
								>
									When you are in need
									of finding a
									specific subscriber,
									you will want to use
									the help of
									SlickText's search
									navigation tool,
									located under the
									Contacts tab of your
									Slicktext account.
									Once here, you will
									have options to sort
									by, filter, and
									search your
									contacts.
									<div class="accordion nesting4-accordion custom-accordionwithicon accordion-border-box mt-3"
										id="accordionnesting4"
									>
										<div class="accordion-item"
										>
											<h2
												class="accordion-header"
												id="accordionnesting4Example2"
											>
												<button
													class="accordion-button"
													id="collapseAccorNesting3One"
													type="button"
													style="cursor: pointer"
												> How do I reset my digital tide watch ?
												</button>
											</h2>

											<Collapse
												toggler="#collapseAccorNesting3One"
												class="accordion-collapse"
											>
												<div class="accordion-body"
												> Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
												</div>
											</Collapse>
										</div>
									</div>
								</div>
							</Collapse>
						</div>
						<div class="accordion-item">
							<h2
								class="accordion-header"
								id="accordionnesting2Example2">
								<button
									class="accordion-button"
									id="collapseAccorNesting2Three"
									type="button"
									style="cursor: pointer"
								>
									How Do I Delete a
									Contact From My
									List?
								</button>
							</h2>

							<Collapse
								toggler="#collapseAccorNesting2Three"
								class="accordion-collapse">
								<div class="accordion-body"
								>
									Opting out a
									subscriber will
									allow SlickText to
									maintain the history
									of the subscriber as
									it pertains to the
									textword you are
									opting them out of.
									If this user was to
									text to join again,
									the initial text
									they are met with
									will be a "welcome
									back" message
									instead of the auto
									reply.
								</div>
							</Collapse>
						</div>
					</div>
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingTwo"
			>
				<button
					class="accordion-button"
					id="collapseNestingTwo"
					type="button"
					style="cursor: pointer"
				>
					How Does Personalization Work?
				</button>
			</h2>

			<Collapse
				toggler="#collapseNestingTwo"
				class="accordion-collapse"
			>
				<div class="accordion-body"> Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields.
					<div class="accordion nesting3-accordion custom-accordionwithicon accordion-border-box mt-3"
						id="accordionnesting3">
						<div class="accordion-item mt-2"
						>
							<h2
								class="accordion-header"
								id="accordionnesting4Example2">
								<button
									class="accordion-button"
									id="collapseAccorNesting1One"
									type="button"
									style="cursor: pointer"
								>
									Howe does
									temperature impact
									my watch?
								</button>
							</h2>

							<Collapse
								toggler="#collapseAccorNesting1One"
								class="accordion-collapse"
								id="accor_nesting3Examplecollapse2">
								<div class="accordion-body"
								> Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
								</div>
							</Collapse>
						</div>
					</div>
				</div>
			</Collapse>
		</div>
		<div class="accordion-item">
			<h2
				class="accordion-header"
				id="headingThree"
			>
				<button
					class="accordion-button"
					id="collapseNestingThree"
					type="button"
					style="cursor: pointer"
				>
					What Happens When I Run Out of
					Messages?
				</button>
			</h2>
			<Collapse
				toggler="#collapseNestingThree"
				class="accordion-collapse"
				isOpen
			>
				<div class="accordion-body">
					When you run out of messages, you
					will not be able to send any
					outbound campaigns. This would
					include any scheduled messages, drip
					campaigns, and birthday messages.
					However, we will continue to deliver
					your auto-reply messages to allow
					your subscriber list to continue to
					grow.
				</div>
			</Collapse>
		</div>
	</div>
</div>
`;
  const fillColoredAccordionCode = `
<!-- Accordions Fill Colored -->
<div class="live-preview">
	<Row>
		<Col xxl={6}>
			<div
				class="custom-accordionwithicon accordion-fill-success"
				id="accordionFill"
			>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="accordionFillExample1">
						<button
							class="accordion-button"
							id="collapseFillOne"
							type="button"
							style="cursor: pointer"
						>
							What are webhooks?
						</button>
					</h2>

					<Collapse
						class="accordion-collapse"
						toggler="#collapseFillOne"
						isOpen>
						<div class="accordion-body">
							Webhooks allow you to gather
							real time data on key
							interactions that happen
							with your Slick Text
							account. Simply provide us
							with a url where you'd like
							the data to be sent, choose
							which events you'd like to
							be informed of, and click
							save.
						</div>
					</Collapse>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="accordionFillExample2">
						<button
							class="accordion-button"
							id="collapseFillTwo"
							type="button"
							style="cursor: pointer"
						>
							Where can I find my Textword
							ID?
						</button>
					</h2>

					<Collapse
						class="accordion-collapse"
						toggler="#collapseFillTwo">
						<div class="accordion-body">
							Head over to the Textwords
							page. Click options on the
							right hand side, and then
							click Settings. This will
							redirect you to your
							Textword Setting page. Now,
							go check your url, and the
							textword ID will be the
							number after "word=". Too
							much or too little spacing,
							as in the example below.
						</div>
					</Collapse>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="accordionFillExample3">
						<button
							class="accordion-button"
							id="collapseFillThree"
							type="button"
							style="cursor: pointer"
						>
							Where is your API
							documentation?
						</button>
					</h2>
					<Collapse
						toggler="#collapseFillThree"
						class="accordion-collapse"
						id="accor_fill3">
						<div class="accordion-body">
							You always want to make sure
							that your fonts work well
							together and try to limit
							the number of fonts you use
							to three or less. Experiment
							and play around with the
							fonts that you already have
							in the software you\u2019re
							working with reputable font
							websites.
						</div>
					</Collapse>
				</div>
			</div>
		</Col>
		<Col xxl={6}>
			<div
				class="custom-accordionwithicon accordion-flush accordion-fill-secondary"
				id="accordionFill2"
			>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="accordionFill2Example1">
						<button
							class="accordion-button"
							id="collapseCustomOne"
							type="button"
							style="cursor: pointer"
						>
							How Does Age Verification
							Work?
						</button>
					</h2>

					<Collapse
						toggler="#collapseCustomOne"
						class="accordion-collapse"
						isOpen>
						<div class="accordion-body">
							Food truck fixie locavore,
							accusamus mcsweeney's marfa
							nulla single-origin coffee
							squid. Exercitation +1
							labore velit, blog sartorial
							PBR leggings next level wes
							anderson artisan four loko
							farm-to-table craft beer
							twee. commodo enim craft
							beer mlkshk aliquip jean
							shorts ullamco ad vinyl
							cillum PBR.
						</div>
					</Collapse>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="accordionFill2Example2">
						<button
							class="accordion-button"
							id="collapseCustomTwo"
							type="button"
							style="cursor: pointer"
						>
							What Kind of List Growth
							Should I Expect?
						</button>
					</h2>

					<Collapse
						toggler="#collapseCustomTwo"
						class="accordion-collapse"
						id="accor_fill22">
						<div class="accordion-body">
							Consistency is the one thing
							that can take all of the
							different elements in your
							design, and tie them all
							together and make them work.
							In an awareness campaign, it
							is vital for people to begin
							put 2 and 2 together and
							begin to recognize your
							cause. Consistency piques
							people\u2019s interest.
						</div>
					</Collapse>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="accordionFill2Example3">
						<button
							class="accordion-button"
							id="collapseCustomThree"
							type="button"
							style="cursor: pointer"
						>
							How Do I Delete a Contact
							From My List?
						</button>
					</h2>
					<Collapse
						toggler="#collapseCustomThree"
						class="accordion-collapse"
						id="accor_fill23">
						<div class="accordion-body">
							Cras ultricies mi eu turpis
							hendrerit fringilla.
							Vestibulum ante ipsum primis
							in faucibus orci luctus et
							ultrices posuere cubilia
							Curae; In ac dui quis mi
							consectetuer lacinia. Nam
							pretium turpis et arcu arcu
							tortor, suscipit eget,
							imperdiet nec, imperdiet
							iaculis aliquam ultrices
							mauris.
						</div>
					</Collapse>
				</div>
			</div>
		</Col>
	</Row>
</div>
`;
  const collapseCode = `
<!-- Collapse Example -->
<div class="live-preview">
	<div class="d-flex gap-2 flex-wrap mb-3">
		<Link
			href="#!"
			id="collapseExample"
			style="cursor: pointer"
			class="btn btn-primary"
		>
			Link with href{" "}
		</Link>
		<Button
			color="primary"
			id="collapseExample"
			style="cursor : pointer"
		>
			Button with data-target
		</Button>
	</div>
	<Collapse toggler="#collapseExample" isOpen>
		<div class="card mb-0">
			<CardBody>
				When designing, the goal is to draw
				someone\u2019s attention and portray to them
				what you\u2019re trying to say. You can make
				a big statement by using little tricks,
				like this one. Use contrasting fonts.
				you can use a bold sanserif font with a
				cursive.
			</CardBody>
		</div>
	</Collapse>
</div>
`;
  const horizontalCollapseCode = `
<!-- Horizontal Collapse -->
<div class="live-preview">
	<p>
		<Button
			id="collapseWidthExample"
			color="primary"
			style="cursor : pointer"
		>
			Toggle Width Collapse
		</Button>
	</p>

	<div>
		<Collapse
			toggler="#collapseWidthExample"
			horizontal
			isOpen
		>
			<div
				class="card card-body mb-0"
				style="width: 300px"
			>
				This is some placeholder content for a
				horizontal collapse. It's hidden by
				default and shown when triggered.
			</div>
		</Collapse>
	</div>
</div>
`;
  const iconCollapseCode = `
<!-- Collapse with Icon -->
<div class="live-preview">
	<div class="hstack gap-3 mb-3">
		<Link
			href="#!"
			id="collapseWithicon"
			style="cursor: pointer"
			class="link-success"
		>
			<i
				class="ri-arrow-down-circle-line fs-16"
			/>
		</Link>
		<Button
			color="light"
			id="collapseWithicon2"
			style="cursor : pointer"
		>
			<i class="ri-filter-2-line" />
		</Button>
	</div>
	<Collapse toggler="#collapseWithicon" isOpen>
		<div class="card mb-0">
			<CardBody>
				If you enter text including symbols in
				the search criteria, the search criteria
				is interpreted exactly as you entered
				it, and the search is case sensitive as
				a case insensitive search that contains
				certain text but does also provide a lot
				of search criteria options.
			</CardBody>
		</div>
	</Collapse>
	<Collapse toggler="#collapseWithicon2">
		<div class="card mb-0 mt-3">
			<CardBody>
				When you want to search for data, such
				as customer names, addresses, or product
				groups, you enter criteria. In search
				criteria you can use all the numbers and
				letters that you normally use in the
				specific field. In addition, you can use
				special symbols to further filter the
				results.
			</CardBody>
		</div>
	</Collapse>
</div>
`;
  const inlineBLockCollapseCode = `
<!-- Inline & Block Element Collapse -->
<div class="live-preview">
	<div class="mb-3">
		<h6 class="text-primary" id="collapseblock">
			<code>&lt;h6&gt;</code> Inline Element Collapse
		</h6>

		<span
			role="button"
			class="text-primary fw-medium"
			id="collapseinline"
		>
			<code>&lt;span&gt;</code> Block Element Collapse
		</span>
	</div>
	<Row class="g-2">
		<Col class="col-auto">
			<Collapse
				toggler="#collapseblock"
				horizontal
				isOpen
			>
				<div
					class="card card-body mb-0"
					style="width: 300px"
				>
					A wonderful serenity has taken
					possession of my entire soul, like
					these sweet mornings of spring
					heart.
				</div>
			</Collapse>
		</Col>
		<Col class="col-auto">
			<Collapse
				toggler="#collapseinline"
				horizontal
			>
				<div
					class="card card-body mb-0"
					style="width: 300px"
				>
					When you have created a new account
					schedule and set up the rows, you
					must set up columns.
				</div>
			</Collapse>
		</Col>
	</Row>
</div>
`;
  const multipleTargetCollapseCode = `
<!-- Multiple Targets Collapse -->
<div class="live-preview">
	<div class="d-flex gap-2 flex-wrap mb-3">
		<Link
			href="#!"
			id="multiCollapseExample1"
			style="cursor: pointer"
			class="btn btn-primary"
		>
			Toggle First Element
		</Link>
		<Button
			id="multiCollapseExample2"
			color="primary"
			style="cursor : pointer"
		>
			Toggle Second Element
		</Button>
		<Button
			id="multiCollapseExample2"
			color="primary"
			style="cursor : pointer"
		>
			Toggle Both Elements
		</Button>
	</div>
	<Row>
		<Col>
			<Collapse
				toggler="#multiCollapseExample1"
				class="multi-collapse"
				isOpen
			>
				<div class="card card-body mb-0">
					Some placeholder content for the
					first collapse component of this
					multi-collapse example. This panel
					is hidden by default but revealed
					when the user activates the relevant
					trigger.
				</div>
			</Collapse>
		</Col>
		<Col>
			<Collapse
				toggler="#multiCollapseExample2"
				class="multi-collapse"
			>
				<div class="card card-body mb-0">
					Some placeholder content for the
					second collapse component of this
					multi-collapse example. This panel
					is hidden by default but revealed
					when the user activates the relevant
					trigger.
				</div>
			</Collapse>
		</Col>
	</Row>
</div>
`;
  return `${$$result.head += `${$$result.title = `<title>Accordians | Velzon - Svelte Admin &amp; Dashboard Template</title>`, ""}`, ""}

${validate_component(UiContent, "UiContent").$$render($$result, {}, {}, {})}
<div class="${"page-content"}">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(BreadCrumb, "BreadCrumb").$$render($$result, {
        title: "Accordions",
        pageTitle: "Base UI"
      }, {}, {})}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Default Accordion" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">A Default Accordian Example.</p>
						<div class="${"live-preview"}"><div class="${"accordion"}" id="${"default-accordion-example"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button id="${"collapseOne"}" class="${"accordion-button"}">How to create a group booking ?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseOne",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Although you probably won\u2019t get into
											any legal trouble if you do it just
											once, why risk it? If you made your
											subscribers a promise, you should
											honor that. If not, you run the risk
											of a drastic increase in opt outs,
											which will only hurt you in the long
											run.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingTwo"}"><button id="${"collapseTwo"}" class="${"accordion-button"}" type="${"button"}" style="${"cursor: pointer"}">Why do we use it ?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseTwo"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">No charges are put in place by
											SlickText when subscribers join your
											text list. This does not mean
											however that charges 100% will not
											occur. Charges that may occur fall
											under part of the compliance
											statement stating &quot;Message and Data
											rates may apply.&quot;
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingThree"}"><button type="${"button"}" id="${"collapseThree"}" class="${"accordion-button"}" style="${"cursor: pointer"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseThree"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Now that you have a general idea of
											the amount of texts you will need
											per month, simply find a plan size
											that allows you to have this
											allotment, plus some extra for
											growth. Don&#39;t worry, there are no
											mistakes to be made here. You can
											always upgrade and downgrade.
										</div>`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: defaultAccordionCode,
                        id: "defaultAccordionCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Accordion Flush" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>accordion-flush</code> class to remove the
							default background-color, some borders, and some rounded
							corners to render accordions edge-to-edge with their
							parent container.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion"}" id="${"default-accordion-example"}" flush><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button"}" type="${"button"}" style="${"cursor: pointer"}" id="${"collapseFlushOne"}">How do I set up my profile ?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        href: "#collapseFlushOne",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">The renewal of your SlickText
											service happens on the anniversary
											of your original paid sign up date.
											Upgrading in the middle of your
											billing period will not change the
											billing date. Upgrading does however
											force an immediate, pro-rated charge
											to take place on your account.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingTwo"}"><button class="${"accordion-button"}" id="${"collapseFlushTwo"}" type="${"button"}" style="${"cursor: pointer"}">What can I do with my project ?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseFlushTwo"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">If you had signed up on a free
											account with Slicktext, then
											upgraded to a paid plan at a later
											date, your bill will renew based on
											the date you had upgraded to a paid
											plan. All invoices are able to be
											viewed under your plan options in
											your SlickText account.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingThree"}"><button class="${"accordion-button"}" id="${"collapseFlushThree"}" type="${"button"}" style="${"cursor: pointer"}">Where can I go to edit voice
											settings
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseFlushThree"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">No, we cannot provide this
											information. Opting out from a list
											is an anonymous, private act. This
											prevents further harassment.
											Providing this information is
											considered bad practice, and further
											communication after they opt out
											would be considered against
											compliance.
										</div>`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: flushAccordionCode,
                        id: "flushAccordionCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Accordions with Icons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>custom-accordionwithicon</code> class to show
							custom icon at accordion.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion custom-accordionwithicon accordion-secondary"}" id="${"accordionWithicon"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingOne"}"><button class="${"accordion-button"}" id="${"collapseIconOne"}" type="${"button"}" style="${"cursor: pointer"}"><i class="${"ri-global-line me-2"}"></i> How
											Does Age Verification Work?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseIconOne",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Increase or decrease the letter
											spacing depending on the situation
											and try, try again until it looks
											right, and each assumenda labore aes
											Homo nostrud organic, assumenda
											labore aesthetic magna elements,
											buttons, everything.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingTwo"}"><button class="${"accordion-button"}" id="${"collapseIconTwo"}" type="${"button"}" style="${"cursor: pointer"}"><i class="${"ri-user-location-line me-2"}"></i> How Does Link Tracking Work?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseIconTwo"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Nullam quis ante. Etiam sit amet
											orci eget eros faucibus tincidunt.
											Duis leo. Sed fringilla mauris sit
											amet nibh. Donec sodales sagittis
											magna. Sed consequat, leo eget
											bibendum sodales, augue velit cursus
											nunc, quis gravida magna mi a
											libero. Fusce vulputate eleifend
											sapien.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingThree"}"><button class="${"accordion-button"}" id="${"collapseIconThree"}" type="${"button"}" style="${"cursor: pointer"}"><i class="${"ri-pen-nib-line me-2"}"></i> How
											Do I Set Up the Drip Feature?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        class: "accordion-collapse",
                        toggler: "#collapseIconThree"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis
											hendrerit fringilla. Vestibulum ante
											ipsum primis in faucibus orci luctus
											et ultrices posuere cubilia Curae;
											In ac dui quis mi consectetuer
											lacinia. Nam pretium turpis et arcu
											arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis
											aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>
						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: iconAccordionCode,
                        id: "iconAccordionCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Accordions without Icons" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>accordion-icon-none</code> class to remove
							icon at accordion.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion accordion-icon-none"}" id="${"accordionWithouticon"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionwithouticonExample1"}"><button class="${"accordion-button"}" id="${"collapseWithoutIconOne"}" type="${"button"}" style="${"cursor: pointer"}"><i class="${"ri-global-line me-2"}"></i> How
											Does Age Verification Work?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWithoutIconOne",
                        class: "accordion-collapse",
                        id: "accor_withouticoncollapse1",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Each design is a new, unique piece
											of art birthed into this world, and
											while you have the opportunity to be
											creative and make your own style
											choices. For that very reason, I
											went on a quest and spoke to many
											different professional graphic
											designers.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionwithouticonExample2"}"><button class="${"accordion-button"}" id="${"collapseWithoutIconTwo"}" type="${"button"}" style="${"cursor: pointer"}"><i class="${"ri-user-location-line me-2"}"></i> How Does Link Tracking Work?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWithoutIconTwo",
                        class: "accordion-collapse",
                        id: "accor_withouticoncollapse2"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">When, while the lovely valley teems
											with vapour around me, and the
											meridian sun strikes the upper
											surface of the impenetrable foliage
											of my trees, and but a few stray
											gleams steal into the inner
											sanctuary, I throw myself down among
											the tall grass by the trickling
											stream; and, as I lie close to the
											earth, a thousand unknown.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionwithouticonExample3"}"><button class="${"accordion-button"}" id="${"collapseWithoutIconThree"}" type="${"button"}" style="${"cursor: pointer"}"><i class="${"ri-pen-nib-line me-2"}"></i> How
											Do I Set Up the Drip Feature?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "collapseWithoutIconThree",
                        class: "accordion-collapse",
                        id: "accor_withouticoncollapse3"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis
											hendrerit fringilla. Vestibulum ante
											ipsum primis in faucibus orci luctus
											et ultrices posuere cubilia Curae;
											In ac dui quis mi consectetuer
											lacinia. Nam pretium turpis et arcu
											arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis
											aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: withIconAccordionCode,
                        id: "withIconAccordionCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Accordions with Plus Icon" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>custom-accordionwithicon-plus</code> class
							to show plus icon at the accordion.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion custom-accordionwithicon-plus"}" id="${"accordionWithplusicon"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionwithouticonExample1"}"><button class="${"accordion-button"}" id="${"collapseWithplusIconOne"}" type="${"button"}" style="${"cursor: pointer"}">What is User Interface Design?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWithplusIconOne",
                        class: "accordion-collapse",
                        id: "accor_plusExamplecollapse1",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Big July earthquakes confound zany
											experimental vow. My girl wove six
											dozen plaid jackets before she quit.
											Six big devils from Japan quickly
											forgot how to waltz. try again until
											it looks right, and each assumenda
											labore aes Homo nostrud organic,
											assumenda labore aesthetic magna
											elements, buttons, everything.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionwithplusExample2"}"><button class="${"accordion-button"}" id="${"collapseWithplusIconTwo"}" type="${"button"}" style="${"cursor: pointer"}">What is Digital Marketing?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWithplusIconTwo",
                        class: "accordion-collapse",
                        id: "accor_plusExamplecollapse2"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">It makes a statement, it\u2019s
											impressive graphic design. Increase
											or decrease the letter spacing
											depending on the situation and try,
											try again until it looks right, and
											each letter has the perfect spot of
											its own. commodo enim craft beer
											mlkshk aliquip jean shorts ullamco.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionwithplusExample3"}"><button class="${"accordion-button"}" id="${"collapseWithplusIconThree"}" type="${"button"}" style="${"cursor: pointer"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWithplusIconThree",
                        class: "accordion-collapse",
                        id: "accor_plusExamplecollapse3"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Spacing depending on the situation
											and try, try again until it looks
											right, and each. next level wes
											anderson artisan four loko
											farm-to-table craft beer twee.
											commodo enim craft beer mlkshk
											aliquip jean shorts ullamco. omo
											nostrud organic, assumenda labore
											aesthetic magna delectus. pposites
											attract, and that\u2019s a fact.
										</div>`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: plusIconAccordionCode,
                        id: "plusIconAccordionCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Left Icon Accordions" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>lefticon-accordion</code> class to show the
							icon on the left side of the accordion.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion lefticon-accordion custom-accordionwithicon accordion-border-box"}" id="${"accordionlefticon"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionlefticonExample1"}"><button class="${"accordion-button"}" id="${"collapseLeftIconOne"}" type="${"button"}" style="${"cursor: pointer"}">What is User Interface Design?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseLeftIconOne",
                        class: "accordion-collapse",
                        id: "accor_lefticonExamplecollapse1",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Anim pariatur cliche reprehenderit,
											enim eiusmod high life accusamus
											terry richardson ad squid. 3 wolf
											moon officia aute, non cupidatat
											skateboard dolor brunch. Food truck
											quinoa nesciunt laborum eiusmod.
											Brunch 3 wolf moon tempor, sunt
											aliqua nulla assumenda shoreditch
											et.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionlefticonExample2"}"><button class="${"accordion-button"}" id="${"collapseLeftIconTwo"}" type="${"button"}" style="${"cursor: pointer"}">What is Digital Marketing?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseLeftIconTwo",
                        class: "accordion-collapse",
                        id: "accor_lefticonExamplecollapse2"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Nullam quis ante. Etiam sit amet
											orci eget eros faucibus tincidunt.
											Duis leo. Sed fringilla mauris sit
											amet nibh. Donec sodales sagittis
											magna. Sed consequat, leo eget
											bibendum sodales, augue velit cursus
											nunc, quis gravida magna mi a
											libero. Fusce vulputate eleifend
											sapien.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionlefticonExample3"}"><button class="${"accordion-button"}" id="${"collapseLeftIconthree"}" type="${"button"}" style="${"cursor: pointer"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseLeftIconthree",
                        class: "accordion-collapse",
                        id: "accor_lefticonExamplecollapse3"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis
											hendrerit fringilla. Vestibulum ante
											ipsum primis in faucibus orci luctus
											et ultrices posuere cubilia Curae;
											In ac dui quis mi consectetuer
											lacinia. Nam pretium turpis et arcu
											arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis
											aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: leftIconAccordionCode,
                        id: "leftIconAccordionCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}

			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Accordions Bordered" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>custom-accordion-border</code> class to create
							the border at the accordion.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"}" id="${"accordionBordered"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionborderedExample1"}"><button class="${"accordion-button"}" id="${"collapseBorderOne"}" type="${"button"}" style="${"cursor: pointer"}">What is User Interface Design?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseBorderOne",
                        class: "accordion-collapse",
                        id: "accor_borderedExamplecollapse1",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Anim pariatur cliche reprehenderit,
											enim eiusmod high life accusamus
											terry richardson ad squid. 3 wolf
											moon officia aute, non cupidatat
											skateboard dolor brunch. Food truck
											quinoa nesciunt laborum eiusmod.
											Brunch 3 wolf moon tempor, sunt
											aliqua nulla assumenda shoreditch
											et.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionborderedExample2"}"><button class="${"accordion-button"}" id="${"collapseBorderTwo"}" type="${"button"}" style="${"cursor: pointer"}">What is Digital Marketing?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseBorderTwo",
                        class: "accordion-collapse",
                        id: "accor_borderedExamplecollapse2"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Nullam quis ante. Etiam sit amet
											orci eget eros faucibus tincidunt.
											Duis leo. Sed fringilla mauris sit
											amet nibh. Donec sodales sagittis
											magna. Sed consequat, leo eget
											bibendum sodales, augue velit cursus
											nunc, quis gravida magna mi a
											libero. Fusce vulputate eleifend
											sapien.
										</div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionborderedExample3"}"><button class="${"accordion-button"}" id="${"collapseBorderThree"}" type="${"button"}" style="${"cursor: pointer"}">Where does it come from ?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseBorderThree",
                        class: "accordion-collapse",
                        id: "accor_borderedExamplecollapse3"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis
											hendrerit fringilla. Vestibulum ante
											ipsum primis in faucibus orci luctus
											et ultrices posuere cubilia Curae;
											In ac dui quis mi consectetuer
											lacinia. Nam pretium turpis et arcu
											arcu tortor, suscipit eget,
											imperdiet nec, imperdiet iaculis
											aliquam ultrices mauris.
										</div>`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: borderedAccordionCode,
                        id: "borderedAccordionCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Nesting Accordions" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>nesting-accordion</code> class to create a
							nesting accordion.
						</p>
						<div class="${"live-preview"}"><div class="${"accordion custom-accordionwithicon accordion-border-box"}" id="${"accordionnesting"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionnestingExample1"}"><button class="${"accordion-button"}" id="${"collapseNestingOne"}" type="${"button"}" style="${"cursor: pointer"}">How Do I Add Contacts/Subscribers?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseNestingOne",
                        class: "accordion-collapse",
                        id: "accor_nestingExamplecollapse1",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">This opt in method is perfect for
											those looking to integrate a
											different software such Shopify or
											Hubspot with Slicktext. For example,
											upon cashing out online, a
											subscriber may submit to have their
											mobile number to receive marketing
											messages. The API will pass this
											information from said software over
											to Slicktext via API integration.
											<div class="${"accordion nesting2-accordion custom-accordionwithicon accordion-border-box mt-3"}" id="${"accordionnesting2"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionnesting2Example1"}"><button class="${"accordion-button"}" id="${"collapseAccorNesting2One"}" type="${"button"}" style="${"cursor: pointer"}">How Do I Search For
															Contacts?
														</button></h2>

													${validate_component(Collapse, "Collapse").$$render($$result, {
                            toggler: "#collapseAccorNesting2One",
                            class: "accordion-collapse",
                            id: "accor_nesting2Examplecollapse1",
                            isOpen: true
                          }, {}, {
                            default: () => {
                              return `<div class="${"accordion-body"}">When you are in need
															of finding a
															specific subscriber,
															you will want to use
															the help of
															SlickText&#39;s search
															navigation tool,
															located under the
															Contacts tab of your
															Slicktext account.
															Once here, you will
															have options to sort
															by, filter, and
															search your
															contacts.
															<div class="${"accordion nesting4-accordion custom-accordionwithicon accordion-border-box mt-3"}" id="${"accordionnesting4"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionnesting4Example2"}"><button class="${"accordion-button"}" id="${"collapseAccorNesting3One"}" type="${"button"}" style="${"cursor: pointer"}">How do I reset my digital tide watch ?
																		</button></h2>

																	${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseAccorNesting3One",
                                class: "accordion-collapse"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a &quot;welcome back&quot; message instead of the auto reply.
																		</div>`;
                                }
                              })}</div></div></div>`;
                            }
                          })}</div>
												<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionnesting2Example2"}"><button class="${"accordion-button"}" id="${"collapseAccorNesting2Three"}" type="${"button"}" style="${"cursor: pointer"}">How Do I Delete a
															Contact From My
															List?
														</button></h2>

													${validate_component(Collapse, "Collapse").$$render($$result, {
                            toggler: "#collapseAccorNesting2Three",
                            class: "accordion-collapse"
                          }, {}, {
                            default: () => {
                              return `<div class="${"accordion-body"}">Opting out a
															subscriber will
															allow SlickText to
															maintain the history
															of the subscriber as
															it pertains to the
															textword you are
															opting them out of.
															If this user was to
															text to join again,
															the initial text
															they are met with
															will be a &quot;welcome
															back&quot; message
															instead of the auto
															reply.
														</div>`;
                            }
                          })}</div></div></div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingTwo"}"><button class="${"accordion-button"}" id="${"collapseNestingTwo"}" type="${"button"}" style="${"cursor: pointer"}">How Does Personalization Work?
										</button></h2>

									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseNestingTwo",
                        class: "accordion-collapse"
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">Personalization allows you to
											provide a personal touch to your
											outbound text marketing campaigns.
											SlickText uses merge tags as
											placeholders that are replaced with
											contact-specific information when a
											text message is sent. These merge
											tags may also be known as
											personalization fields.
											<div class="${"accordion nesting3-accordion custom-accordionwithicon accordion-border-box mt-3"}" id="${"accordionnesting3"}"><div class="${"accordion-item mt-2"}"><h2 class="${"accordion-header"}" id="${"accordionnesting4Example2"}"><button class="${"accordion-button"}" id="${"collapseAccorNesting1One"}" type="${"button"}" style="${"cursor: pointer"}">Howe does
															temperature impact
															my watch?
														</button></h2>

													${validate_component(Collapse, "Collapse").$$render($$result, {
                            toggler: "#collapseAccorNesting1One",
                            class: "accordion-collapse",
                            id: "accor_nesting3Examplecollapse2"
                          }, {}, {
                            default: () => {
                              return `<div class="${"accordion-body"}">Opting out a
															subscriber will
															allow SlickText to
															maintain the history
															of the subscriber as
															it pertains to the
															textword you are
															opting them out of.
															If this user was to
															text to join again,
															the initial text
															they are met with
															will be a &quot;welcome
															back&quot; message
															instead of the auto
															reply.
														</div>`;
                            }
                          })}</div></div></div>`;
                        }
                      })}</div>
								<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"headingThree"}"><button class="${"accordion-button"}" id="${"collapseNestingThree"}" type="${"button"}" style="${"cursor: pointer"}">What Happens When I Run Out of
											Messages?
										</button></h2>
									${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseNestingThree",
                        class: "accordion-collapse",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"accordion-body"}">When you run out of messages, you
											will not be able to send any
											outbound campaigns. This would
											include any scheduled messages, drip
											campaigns, and birthday messages.
											However, we will continue to deliver
											your auto-reply messages to allow
											your subscriber list to continue to
											grow.
										</div>`;
                        }
                      })}</div></div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: nestingAccordionCode,
                        id: "nestingAccordionCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xl: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Accordions Fill Colored" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Use <code>accordion-fill-</code> class with modifier
							class to the color accordion.
						</p>
						<div class="${"live-preview"}">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div class="${"accordion custom-accordionwithicon accordion-fill-success"}" id="${"accordionFill"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionFillExample1"}"><button class="${"accordion-button"}" id="${"collapseFillOne"}" type="${"button"}" style="${"cursor: pointer"}">What are webhooks?
												</button></h2>

											${validate_component(Collapse, "Collapse").$$render($$result, {
                                class: "accordion-collapse",
                                toggler: "#collapseFillOne",
                                isOpen: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">Webhooks allow you to gather
													real time data on key
													interactions that happen
													with your Slick Text
													account. Simply provide us
													with a url where you&#39;d like
													the data to be sent, choose
													which events you&#39;d like to
													be informed of, and click
													save.
												</div>`;
                                }
                              })}</div>
										<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionFillExample2"}"><button class="${"accordion-button collapsed"}" id="${"collapseFillTwo"}" type="${"button"}" style="${"cursor: pointer"}">Where can I find my Textword
													ID?
												</button></h2>

											${validate_component(Collapse, "Collapse").$$render($$result, {
                                class: "accordion-collapse",
                                toggler: "#collapseFillTwo"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">Head over to the Textwords
													page. Click options on the
													right hand side, and then
													click Settings. This will
													redirect you to your
													Textword Setting page. Now,
													go check your url, and the
													textword ID will be the
													number after &quot;word=&quot;. Too
													much or too little spacing,
													as in the example below.
												</div>`;
                                }
                              })}</div>
										<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionFillExample3"}"><button class="${"accordion-button collapsed"}" id="${"collapseFillThree"}" type="${"button"}" style="${"cursor: pointer"}">Where is your API
													documentation?
												</button></h2>
											${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseFillThree",
                                class: "accordion-collapse",
                                id: "accor_fill3"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">You always want to make sure
													that your fonts work well
													together and try to limit
													the number of fonts you use
													to three or less. Experiment
													and play around with the
													fonts that you already have
													in the software you\u2019re
													working with reputable font
													websites.
												</div>`;
                                }
                              })}</div></div>`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
                            default: () => {
                              return `<div class="${"accordion custom-accordionwithicon accordion-flush accordion-fill-secondary"}" id="${"accordionFill2"}"><div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionFill2Example1"}"><button class="${"accordion-button"}" id="${"collapseCustomOne"}" type="${"button"}" style="${"cursor: pointer"}">How Does Age Verification
													Work?
												</button></h2>

											${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseCustomOne",
                                class: "accordion-collapse",
                                isOpen: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">Food truck fixie locavore,
													accusamus mcsweeney&#39;s marfa
													nulla single-origin coffee
													squid. Exercitation +1
													labore velit, blog sartorial
													PBR leggings next level wes
													anderson artisan four loko
													farm-to-table craft beer
													twee. commodo enim craft
													beer mlkshk aliquip jean
													shorts ullamco ad vinyl
													cillum PBR.
												</div>`;
                                }
                              })}</div>
										<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionFill2Example2"}"><button class="${"accordion-button collapsed"}" id="${"collapseCustomTwo"}" type="${"button"}" style="${"cursor: pointer"}">What Kind of List Growth
													Should I Expect?
												</button></h2>

											${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseCustomTwo",
                                class: "accordion-collapse",
                                id: "accor_fill22"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">Consistency is the one thing
													that can take all of the
													different elements in your
													design, and tie them all
													together and make them work.
													In an awareness campaign, it
													is vital for people to begin
													put 2 and 2 together and
													begin to recognize your
													cause. Consistency piques
													people\u2019s interest.
												</div>`;
                                }
                              })}</div>
										<div class="${"accordion-item"}"><h2 class="${"accordion-header"}" id="${"accordionFill2Example3"}"><button class="${"accordion-button collapsed"}" id="${"collapseCustomThree"}" type="${"button"}" style="${"cursor: pointer"}">How Do I Delete a Contact
													From My List?
												</button></h2>
											${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseCustomThree",
                                class: "accordion-collapse",
                                id: "accor_fill23"
                              }, {}, {
                                default: () => {
                                  return `<div class="${"accordion-body"}">Cras ultricies mi eu turpis
													hendrerit fringilla.
													Vestibulum ante ipsum primis
													in faucibus orci luctus et
													ultrices posuere cubilia
													Curae; In ac dui quis mi
													consectetuer lacinia. Nam
													pretium turpis et arcu arcu
													tortor, suscipit eget,
													imperdiet nec, imperdiet
													iaculis aliquam ultrices
													mauris.
												</div>`;
                                }
                              })}</div></div>`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: fillColoredAccordionCode,
                        id: "fillColoredAccordionCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Collapse Example" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><div class="${"d-flex gap-2 flex-wrap mb-3"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        id: "collapseExample",
                        style: "cursor: pointer",
                        class: "btn btn-primary"
                      }, {}, {
                        default: () => {
                          return `Link with href${escape(" ")}`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "primary",
                        id: "collapseExample",
                        style: "cursor : pointer"
                      }, {}, {
                        default: () => {
                          return `Button with data-target
								`;
                        }
                      })}</div>
							${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseExample",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"card mb-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `When designing, the goal is to draw
										someone\u2019s attention and portray to them
										what you\u2019re trying to say. You can make
										a big statement by using little tricks,
										like this one. Use contrasting fonts.
										you can use a bold sanserif font with a
										cursive.
									`;
                            }
                          })}</div>`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, { code: collapseCode, id: "collapseCode" }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Horizontal Collapse" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="${"live-preview"}"><p>${validate_component(Button, "Button").$$render($$result, {
                        id: "collapseWidthExample",
                        color: "primary",
                        style: "cursor : pointer"
                      }, {}, {
                        default: () => {
                          return `Toggle Width Collapse
								`;
                        }
                      })}</p>

							<div>${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWidthExample",
                        horizontal: true,
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"card card-body mb-0"}" style="${"width: 300px"}">This is some placeholder content for a
										horizontal collapse. It&#39;s hidden by
										default and shown when triggered.
									</div>`;
                        }
                      })}</div></div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: horizontalCollapseCode,
                        id: "horizontalCollapseCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Collapse with Icon" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Here is the example of collapse in which the icon is
							wrapped within the button collapse toggle.
						</p>
						<div class="${"live-preview"}"><div class="${"hstack gap-3 mb-3"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        id: "collapseWithicon",
                        style: "cursor: pointer",
                        class: "link-success"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-arrow-down-circle-line fs-16"}"></i>`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        color: "light",
                        id: "collapseWithicon2",
                        style: "cursor : pointer"
                      }, {}, {
                        default: () => {
                          return `<i class="${"ri-filter-2-line"}"></i>`;
                        }
                      })}</div>
							${validate_component(Collapse, "Collapse").$$render($$result, {
                        toggler: "#collapseWithicon",
                        isOpen: true
                      }, {}, {
                        default: () => {
                          return `<div class="${"card mb-0"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `If you enter text including symbols in
										the search criteria, the search criteria
										is interpreted exactly as you entered
										it, and the search is case sensitive as
										a case insensitive search that contains
										certain text but does also provide a lot
										of search criteria options.
									`;
                            }
                          })}</div>`;
                        }
                      })}
							${validate_component(Collapse, "Collapse").$$render($$result, { toggler: "#collapseWithicon2" }, {}, {
                        default: () => {
                          return `<div class="${"card mb-0 mt-3"}">${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `When you want to search for data, such
										as customer names, addresses, or product
										groups, you enter criteria. In search
										criteria you can use all the numbers and
										letters that you normally use in the
										specific field. In addition, you can use
										special symbols to further filter the
										results.
									`;
                            }
                          })}</div>`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: iconCollapseCode,
                        id: "iconCollapseCode"
                      }, {}, {})}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { xxl: 6 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Inline & Block Element Collapse" }, {}, {})}

					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">Inline element collapse takes all horizontal space
							hence you can activate the collapse within by
							clicking on full-width horizontal space. Block
							element collapse can be activated by clicking on
							collapse toggle only.
						</p>
						<div class="${"live-preview"}"><div class="${"mb-3"}"><h6 class="${"text-primary"}" id="${"collapseblock"}"><code>&lt;h6&gt;</code> Inline Element Collapse
								</h6>

								<span role="${"button"}" class="${"text-primary fw-medium"}" id="${"collapseinline"}"><code>&lt;span&gt;</code> Block Element Collapse
								</span></div>
							${validate_component(Row, "Row").$$render($$result, { class: "g-2" }, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                            default: () => {
                              return `${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseblock",
                                horizontal: true,
                                isOpen: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"card card-body mb-0"}" style="${"width: 300px"}">A wonderful serenity has taken
											possession of my entire soul, like
											these sweet mornings of spring
											heart.
										</div>`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, { class: "col-auto" }, {}, {
                            default: () => {
                              return `${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#collapseinline",
                                horizontal: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"card card-body mb-0"}" style="${"width: 300px"}">When you have created a new account
											schedule and set up the rows, you
											must set up columns.
										</div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: inlineBLockCollapseCode,
                        id: "inlineBLockCollapseCode"
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
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PreviewCardHeader, "PreviewCardHeader").$$render($$result, { title: "Multiple Targets Collapse" }, {}, {})}
					${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="${"text-muted"}">A <code>&lt;button&gt;</code> or
							<code>&lt;a&gt;</code>
							can show and hide multiple elements by referencing them
							with a selector in its href or data-bs-target attribute.
							Multiple <code>&lt;button&gt;</code> or
							<code>&lt;a&gt;</code> can show and hide an element if
							they each reference it with their href or data-bs-target
							attribute.
						</p>
						<div class="${"live-preview"}"><div class="${"d-flex gap-2 flex-wrap mb-3"}">${validate_component(Link, "Link").$$render($$result, {
                        href: "#!",
                        id: "multiCollapseExample1",
                        style: "cursor: pointer",
                        class: "btn btn-primary"
                      }, {}, {
                        default: () => {
                          return `Toggle First Element
								`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        id: "multiCollapseExample2",
                        color: "primary",
                        style: "cursor : pointer"
                      }, {}, {
                        default: () => {
                          return `Toggle Second Element
								`;
                        }
                      })}
								${validate_component(Button, "Button").$$render($$result, {
                        id: "multiCollapseExample2",
                        color: "primary",
                        style: "cursor : pointer"
                      }, {}, {
                        default: () => {
                          return `Toggle Both Elements
								`;
                        }
                      })}</div>
							${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#multiCollapseExample1",
                                class: "multi-collapse",
                                isOpen: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"card card-body mb-0"}">Some placeholder content for the
											first collapse component of this
											multi-collapse example. This panel
											is hidden by default but revealed
											when the user activates the relevant
											trigger.
										</div>`;
                                }
                              })}`;
                            }
                          })}
								${validate_component(Col, "Col").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Collapse, "Collapse").$$render($$result, {
                                toggler: "#multiCollapseExample2",
                                class: "multi-collapse",
                                isOpen: true
                              }, {}, {
                                default: () => {
                                  return `<div class="${"card card-body mb-0"}">Some placeholder content for the
											second collapse component of this
											multi-collapse example. This panel
											is hidden by default but revealed
											when the user activates the relevant
											trigger.
										</div>`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}</div>

						<div class="${"d-none code-view"}">${validate_component(Prism, "PrismCode").$$render($$result, {
                        code: multipleTargetCollapseCode,
                        id: "multipleTargetCollapseCode"
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
export { Uiaccordions as default };
