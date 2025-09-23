import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../css/accordion.css";

const AccordionDemo = () => (
	<Accordion.Root
		className="AccordionRoot"
		type="single"
		defaultValue="item-1"
		collapsible
	>
		<Accordion.Item className="AccordionItem" value="item-1">
			<AccordionTrigger>Frontend Skills</AccordionTrigger>
			<AccordionContent>
				HTML, CSS, JavaScript, React.js, Redux Toolkit.
			</AccordionContent>
		</Accordion.Item>

		<Accordion.Item className="AccordionItem" value="item-2">
			<AccordionTrigger>Backend Skills</AccordionTrigger>
			<AccordionContent>
				Node.js, Express, JWT Tokens, OAuth2.0, Go .
			</AccordionContent>
		</Accordion.Item>

		<Accordion.Item className="AccordionItem" value="item-3">
			<AccordionTrigger>Databases</AccordionTrigger>
			<Accordion.Content className="AccordionContent">
				<div className="AccordionContentText">
					MongoDB, MySQL, Postgres .
				</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon className="AccordionChevron" aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);

export default AccordionDemo;
