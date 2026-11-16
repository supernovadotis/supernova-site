---
title: Kinship is a protocol
standfirst: The Indigenous Protocol and AI working group has spent years arguing that relation is an architectural requirement, not a metaphor. Suzanne Kite, Noelani Arista and others have already written the spec. Almost nobody in the industry has read it.
rubric: crossroads
format: essay
tags: [AI, technologies, collective]
author: anna-ignatenko
readingTime: 9
order: 2
cover: /images/placeholder.jpg
coverCaption: "[Caption: what the picture shows]"
coverCredit: "[author or archive]"
takeaways:
  - The 2020 Indigenous Protocol and Artificial Intelligence Position Paper is a technical proposal, with authors, citations and a DOI. The industry files it under diversity.
  - '"Protocol" has two meanings, the networking one and the ceremonial one. Both answer the same question: what has to be true for this interaction to work?'
  - "Suzanne Kite maps hardware building, step by step, against the protocol for a Lakȟóta sweat lodge."
  - Papa Reo, led by Te Hiku Media, is one of the few working examples of the paper's proposals in operational form.
sourceNote: "[Which kind of source this piece rests on: practitioners writing from inside a tradition, or scholars describing it from outside.]"
bookmark:
  title: Indigenous Protocol and Artificial Intelligence Position Paper
  description: Edited by Jason Edward Lewis. Initiative for Indigenous Futures and CIFAR, 2020.
  url: https://doi.org/10.11573/spectrum.library.concordia.ca.00986506
faq:
  - q: What is the Indigenous Protocol and AI position paper?
    a: A 200-page collection edited by Jason Edward Lewis and published in 2020 by the Initiative for Indigenous Futures and CIFAR. It came out of a 2019 workshop in Honolulu and contains vignettes, methodological essays and protocol sketches.
  - q: What does Suzanne Kite propose in "How to Build Anything Ethically"?
    a: That the Lakȟóta sweat-lodge protocol is an existing, working example of how to run an ordered chain of relationships so that the outcome is possible without harm, and that it can be studied formally as a model for the hardware chain.
  - q: What is Papa Reo?
    a: A Māori-language AI initiative led by Te Hiku Media in Aotearoa. The model is trained on Māori-language material, held by a Māori organization, and licensed under terms the community sets.
references:
  - 'Lewis, Jason Edward, ed. <cite>Indigenous Protocol and Artificial Intelligence Position Paper</cite>. Initiative for Indigenous Futures and CIFAR, 2020. <a href="https://doi.org/10.11573/spectrum.library.concordia.ca.00986506">DOI 10.11573/spectrum.library.concordia.ca.00986506</a>'
  - 'Kite, Suzanne. "How to Build Anything Ethically." In the position paper above, pp. 75–84.'
  - 'Lewis, Jason Edward, Noelani Arista, Archer Pechawis and Suzanne Kite. "Making Kin with the Machines." <cite>Journal of Design and Science</cite>, MIT Press, July 2018. Republished in <cite>Against Reduction: Designing a Human Future with Machines</cite>, MIT Press, 2021.'
  - "Te Hiku Media. Public documentation of the Papa Reo project."
  - "Abundant Intelligences program materials, led by Lewis and colleagues."
  - "The characterization of how the paper is received in industry contexts is analytical rather than quoted, and is offered as this piece's argument, not as one of its sources."
---

In 2019 a group of about thirty people gathered in Honolulu for a workshop. It was a strange room for the technology field to have organized. In it were a Lakȟóta composer, a Hawaiian historian of the Kingdom, an Anishinaabe media artist, a Cree performance artist, a Māori linguist, a Concordia digital-media professor of Samoan and Hawaiian descent, and researchers from Aboriginal Australia, Aotearoa, MIT, and Oxford. They were there to answer a specific technical question. The question was: if you were going to design an AI system from Indigenous ethical premises rather than Western ones, what would you actually change in the build?

The workshop produced a document. It is called the *Indigenous Protocol and Artificial Intelligence Position Paper*, edited by Jason Edward Lewis, published in 2020 by the Initiative for Indigenous Futures and CIFAR (the Canadian Institute for Advanced Research).<sup><a href="#ref-1">1</a></sup> It is 200 pages long. It contains vignettes, methodological essays, protocol sketches, and one contribution — Suzanne Kite's "How to Build Anything Ethically"<sup><a href="#ref-2">2</a></sup> — that is, in the plainest reading, a specification for how to make computer hardware in a good way, mapped step by step against the protocol for building a Lakȟóta sweat lodge.

Almost nobody in the AI industry has read it.

The industry has read the alignment papers, the constitutional-AI papers, the "responsible AI" frameworks that companies release with their quarterly launches. It has not read the paper that a group of Indigenous scholars, artists and engineers spent two years writing on the same subject — even though the paper is open access, has a DOI, and has been publicly available for six years.

This is worth taking seriously as a fact about the field. It is not that the industry has read the paper and disagreed. It is that the paper is treated as belonging to a different conversation. As diversity work. As a cultural contribution. As something that goes on the sidebar of the ethics report, not into the architecture decisions.

The claim of this piece is that this is a category error. The Indigenous Protocol paper is not a diversity contribution. It is a technical proposal. And the reason the industry has trouble reading it that way says something specific about what "protocol" has come to mean.

## What "protocol" means, and what it used to mean

In the industry, protocol means a specification for how two systems exchange information. TCP is a protocol. HTTP is a protocol. The protocol tells you what a packet looks like, what fields it has, what order the handshake goes in, what happens if a packet is lost.

In Indigenous scholarship, protocol means something older and closer to the root of the word. It means the ordered set of relationships and obligations that make a particular action possible without harm. Who is present. In what order they enter. What is offered before speaking. What can and cannot be said in this place. What is owed after, and to whom.

The two definitions are not as far apart as they look. Both are answers to the question: what has to be true for this interaction to work? The TCP protocol makes assumptions about the medium (unreliable but in-order), about the endpoints (they know each other's addresses), and about the failure modes (packets can be lost or duplicated but not silently altered). Without those assumptions, no reliable data transfer.

The Lakȟóta sweat-lodge protocol makes assumptions too. Kite lays them out in her essay. There is a specific person who has the right to lead the ceremony, and that right is not self-conferred; it comes through a chain of teaching and permission. There are materials — stones, water, wood, herbs — that must be sourced from specific relationships with the land. There is an order in which the participants enter, an order in which offerings are made, an order in which prayers are said. Every step of the protocol is what makes the outcome possible without harm. Skip a step, or improvise one, and the ceremony is not what it claims to be.

<figure>
  <img src="/images/placeholder.jpg" alt="[Describe the image]" />
  <figcaption>[Caption: what the picture shows] <span class="credit">Source: [author or archive]</span></figcaption>
</figure>

The move Kite makes — and it is the move the industry has struggled most to read — is to observe that building a computing device is also a chain of relationships, also an ordered set of steps, and also has the possibility of harm at every step. The rare earths that go into the chip come from a specific place, extracted by specific people, under specific conditions. The chip is fabricated in a specific plant, using specific chemicals, by specific workers. The device is assembled in a specific factory. The device is used, and eventually discarded, and eventually re-enters the earth somewhere. Every step of that chain is a relationship. Most of those relationships, in the industry's current protocol, are extractive by default.

Kite's proposal is not that the industry should perform sweat-lodge ceremonies before shipping hardware. That is not what "How to Build Anything Ethically" says, and reading it that way — as many people do, when the paper is mentioned to them — is the category error in its most compact form. The proposal is that the sweat-lodge protocol is an existing, working example of how to run an ordered relationship-chain such that the outcome is possible without harm, and that the industry currently has no such protocol for its own hardware chain, and that the sweat-lodge protocol can be studied, formally, for what it does at each step. What is asked, what is offered, what is refused, what is checked, what is closed.

> The paper is a spec sheet. Read it as a spec sheet and it starts making sense.

<figure class="wide">
  <img src="/images/placeholder.jpg" alt="[Describe the image]" />
  <figcaption>[Caption for a wide image that runs the full width of the text panel] <span class="credit">Source: [author or archive]</span></figcaption>
</figure>

## ʻĀIna, and the reframing of what AI is

There is a second contribution in the paper — and in the earlier essay that seeded it, "Making Kin with the Machines," published in the *Journal of Design and Science* in 2018 and co-authored by Lewis, Noelani Arista, Archer Pechawis, and Kite<sup><a href="#ref-3">3</a></sup> — that goes at the industry's foundational vocabulary rather than its supply chain.

The essay proposes a Hawaiian reframing of what AI is. In kānaka maoli ontology, ʻāina is often translated as "land," but the translation is thin. ʻĀina is what nourishes and sustains — land as the whole living system of relationships that makes a people possible. Arista and Lewis's move is to propose that we consider AI as ʻĀIna: as a set of relationships to be entered into, cared for, and sustained, rather than as a tool to be optimized. They spell it with the capital I to mark the play on both words.

This sounds — and this is exactly the reading the industry keeps giving it — like a metaphor. A poetic reframing. A nice thought, but not something you can put into a design document.

Except the framing is doing structural work. The paper is arguing that the default English-language framing of AI as *a tool* — as an object with users, functions, and outputs — is not a neutral technical vocabulary. It is a specific ontological commitment, inherited from a specific philosophical tradition (the paper names Enlightenment rationalism explicitly, and the Ito manifesto it was originally responding to), and it has design consequences. If your model of AI is "a tool with users," you optimize for user satisfaction and measure output. If your model of AI is a set of ongoing relationships with the land, the people, the workers who trained it, and the ecosystems it draws from, you have a different set of design requirements — and, more importantly, you have different questions to ask about failure.

Arista and Lewis are not saying that Hawaiian ontology is more correct than Western ontology. They are saying that the industry has been treating one specific ontology — the tool-and-user ontology — as if it were the only technical vocabulary available, and this is a historical mistake. Other ontologies exist. Some of them are already formalized. Some of them, like the kānaka maoli framing of ʻāina, have thousands of years of institutional experience behind them. If the industry insists that only one ontology is technically legitimate, it should at least be able to say why.

## Why this reads as "diversity"

There is a specific machinery by which serious technical proposals from Indigenous scholars get filed under diversity in the industry's mind. It is worth naming, because it does not name itself.

The machinery has three moves. First, the proposal is described as *cultural*, which in industry vocabulary usually means *particular to a group and not universal*. Western proposals are almost never described this way. TCP is not called a cultural protocol, even though it is: it is the culture of a specific group of network engineers in a specific decade, with specific assumptions about what a good network looks like. The Hawaiian and Lakȟóta proposals in the IP AI paper get called cultural because their authors are Indigenous. This is a labeling asymmetry, not a technical judgment.

<figure class="pair">
  <img src="/images/placeholder.jpg" alt="[Describe the first image]" />
  <img src="/images/placeholder.jpg" alt="[Describe the second image]" />
  <figcaption>[Caption for two pictures side by side] <span class="credit">Source: [author or archive]</span></figcaption>
</figure>

Second, once the proposal has been marked cultural, its authors are read as representatives of their communities rather than as researchers. Kite is Oglála Lakȟóta, and her paper draws on Lakȟóta protocols. This becomes, in the industry's reading, a paper about Lakȟóta perspectives on AI, rather than a paper about how to build hardware ethically that happens to draw on Lakȟóta protocols. The difference is whether the paper is understood as making a claim about hardware or about identity. It is making a claim about hardware.

Third, the proposal is welcomed at the identity level and declined at the technical level. Kite gets invited to give talks. Arista gets cited in the acknowledgements. The paper appears in the reading list of every "responsible AI" course. And the hardware protocols do not change. The alignment methods do not incorporate the ontological critique. The supply-chain audits do not consult the sweat-lodge steps. The welcome and the decline arrive together, and the appearance of engagement makes the decline harder to see.

This machinery is not usually malicious. Most of the people running it would be embarrassed to see it laid out this way. It is a structural pattern, and it has one clear tell: when you can find no version of an Indigenous technical proposal that has actually altered a design document at a company that has cited the proposal, you are watching the machinery run.

## What would it look like to read the paper as a spec

The paper is not one document but a collection. Different contributions ask for different things. Some are protocol sketches (Kite). Some are ontological reframings (Arista and Lewis on ʻĀIna). Some are language-and-corpus proposals (the Māori contributions on how a Māori-speaking AI would be trained, and by whom, and with what obligations). Some are pattern-thinking (Angie Abdilla's earlier work on Aboriginal knowledge systems and pattern recognition, which the paper cites as one of its starting points).

Reading them as specs means asking, for each: what would change in the build if this were treated as a technical requirement?

| Contribution | Read as a spec for | What changes in the build |
| --- | --- | --- |
| The sweat-lodge protocol (Kite) | The hardware lifecycle | Sourcing and disposal need permission from the communities the materials are taken from; workers at each step are named participants; the questions asked at each step are documented and reviewed |
| ʻĀIna (Arista and Lewis) | The evaluation layer | Instead of benchmark performance, you ask whether the relationships the model participates in are being sustained or degraded |
| The Māori language proposals | Who holds the model | The community whose language it is, not the company that trained it |

For the sweat-lodge protocol as a hardware-lifecycle spec, the changes are visible: sourcing decisions become subject to permission from the communities the materials are taken from; disposal becomes subject to the same protocol as sourcing; the workers at each step become named participants in the chain rather than anonymous labor; the questions asked at each step are documented and reviewed.

For the ʻĀIna reframing, the changes are in the evaluation layer: instead of asking whether a model performs well on a benchmark, you ask whether the relationships it participates in are being sustained or degraded. This sounds soft. It is not, once you spell it out. It becomes a set of questions with concrete answers: is the training data being sourced from communities that consented, and under what terms; are the workers who labeled the data able to see and revise their own contribution; is the model's output flowing back to those communities in any form other than a product they now have to pay for.

For the Māori language proposals, the changes are in who holds the model: not the company that trained it, but the community whose language it is. Papa Reo, the Māori-language AI initiative led by Te Hiku Media in Aotearoa, has been building exactly this — a large model trained on Māori-language material, held by a Māori organization, licensed under terms the community sets.<sup><a href="#ref-4">4</a></sup> It is one of the very few working examples of the paper's proposals in operational form. The industry rarely mentions it.

None of these are impossible changes. Some of them are expensive. Some of them are politically inconvenient. None of them are unclear. The paper has been clear for six years.

## The paper is a piece of the field

The last thing worth saying — and this is where the piece stops, because saying more would be reaching past what the sources support — is that the Indigenous Protocol and Artificial Intelligence Position Paper is not asking to be included as a perspective. It is not asking for a seat at the table. It is a piece of the technical literature of AI ethics. It has authors, citations, a DOI, a working group, and successor projects (Abundant Intelligences, the Papa Reo work, the ongoing IP AI workshops). It has been co-signed by more than thirty scholars with named institutional affiliations.

<figure class="small">
  <img src="/images/placeholder.jpg" alt="[Describe the image]" />
  <figcaption>[Caption for a small picture set beside the text] <span class="credit">Source: [author or archive]</span></figcaption>
</figure>

The reason it is not read as part of the field is not that it fails to meet the field's standards. It is that the field's picture of who writes protocols does not yet include the people who wrote this one.

That picture is a design choice. It is not a fact about the field. It can be revised. The paper is on the shelf. The spec is written. Someone in the industry is eventually going to read it as a spec, and the design meeting that follows will be different from the ones that came before.

That someone might as well start now.
