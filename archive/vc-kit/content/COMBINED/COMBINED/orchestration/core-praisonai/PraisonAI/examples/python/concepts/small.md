KAG: Boosting LLMs in Professional Domains via
Knowledge Augmented Generation
Lei Liang→,1, Mengshu Sun→,1, Zhengke Gui→,1, Zhongshu Zhu1, Ling Zhong1, Peilong Zhao1,
Zhouyu Jiang1, Yuan Qu1, Zhongpu Bo1, Jin Yang1, Huaidong Xiong1, Lin Yuan1, Jun Xu1,
Zaoyang Wang1, Zhiqiang Zhang1, Wen Zhang2, Huajun Chen2, Wenguang Chen1, Jun Zhou†,1
{leywar.liang, mengshu.sms, zhengke.gzk, jun.zhoujun}@antgroup.com
1Ant Group Knowledge Graph Team, 2Zhejiang University
Github:https://github.com/OpenSPG/KAG
Abstract
The recently developed retrieval-augmented generation (RAG) technology has en-
abled the efﬁcient construction of domain-speciﬁc applications. However, it also
has limitations, including the gap between vector similarity and the relevance of
knowledge reasoning, as well as insensitivity to knowledge logic, such as numeri-
cal values, temporal relations, expert rules, and others, which hinder the effective-
ness of professional knowledge services. In this work, we introduce a professional
domain knowledge service framework called Knowledge Augmented Generation
(KAG). KAG is designed to address the aforementioned challenges with the mo-
tivation of making full use of the advantages of knowledge graph(KG) and vector
retrieval, and to improve generation and reasoning performance by bidirection-
ally enhancing large language models (LLMs) and KGs through ﬁve key aspects:
(1) LLM-friendly knowledge representation, (2) mutual-indexing between knowl-
edge graphs and original chunks, (3) logical-form-guided hybrid reasoning en-
gine, (4) knowledge alignment with semantic reasoning, and (5) model capability
enhancement for KAG. We compared KAG with existing RAG methods in multi-
hop question answering and found that it signiﬁcantly outperforms state-of-the-art
methods, achieving a relative improvement of 19.6% on hotpotQA and 33.5% on
2wiki in terms of F1 score. We have successfully applied KAG to two profes-
sional knowledge Q&A tasks of Ant Group, including E-Government Q&A and
E-Health Q&A, achieving signiﬁcant improvement in professionalism compared
to RAG methods. Furthermore, we will soon natively support KAG on the open-
source KG engine OpenSPG, allowing developers to more easily build rigorous
knowledge decision-making or convenient information retrieval services. This
will facilitate the localized development of KAG, enabling developers to build
domain knowledge services with higher accuracy and efﬁciency.
1
Introduction
Recently, the rapidly advancing Retrieval-Augmented Generation (RAG)[1, 2, 3, 4, 5] technology
has been instrumental in equipping Large Language Models (LLMs) with the capability to acquire
1, *: These authors contributed equally to this work.
2, †: Corresponding author.
arXiv:2409.13731v3  [cs.CL]  26 Sep 2024


domain-speciﬁc knowledge. This is achieved by leveraging external retrieval systems, thereby sig-
niﬁcantly reducing the occurrence of answer hallucinations and allows for the efﬁcient construction
of applications in speciﬁc domains. In order to enhance the performance of the RAG system in
multi-hop and cross-paragraph tasks, knowledge graph, renowned for strong reasoning capabili-
ties, have been introduced into the RAG technical framework, including GraphRAG[6], DALK[7],
SUGRE[8], ToG 2.0[9], GRAG[10], GNN-RAG [11] and HippoRAG[12].
Although RAG and its optimization have solved most of the hallucination problems caused by a lack
of domain-speciﬁc knowledge and real-time updated information, the generated text still lacks co-
herence and logic, rendering it incapable of producing correct and valuable answers, particularly in
specialized domains such as law, medicine, and science where analytical reasoning is crucial. This
shortcoming can be attributed to three primary reasons. Firstly, real-world business processes typi-
cally necessitate inferential reasoning based on the speciﬁc relationships between pieces of knowl-
edge to gather information pertinent to answering a question. RAG, however, commonly relies on
the similarity of text or vectors for retrieving reference information, which may lead to incomplete
and repeated search results. secondly, real-world processes often involve logical or numerical rea-
soning, such as determining whether a set of data increases or decreases in a time series, and the
next token prediction mechanism used by language models is still somewhat weak in handling such
problems.
In contrast, the technical methodologies of knowledge graphs can be employed to address these is-
sues. Firstly, KG organize information using explicit semantics; the fundamental knowledge units
are SPO triples, comprising entities and the relationships between them[13]. Entities possess clear
entity types, as well as relationships. Entities with the same meaning but expressed differently can
be uniﬁed through entity normalization, thereby reducing redundancy and enhancing the intercon-
nectedness of knowledge [14]. During retrieval, the use of query syntax (such as SPARQL[15] and
SQL[16]) enables the explicit speciﬁcation of entity types, mitigating noisy from same named or
similar entities, and allows for inferential knowledge retrieval by specifying relationships based on
query requirements, as opposed to aimlessly expanding into similar yet crucial neighboring content.
Meanwhile, since the query results from knowledge graphs have explicit semantics, they can be
used as variables with speciﬁc meanings. This enables further utilization of the LLM’s planning and
function calling capabilities [17], where the retrieval results are substituted as variables into function
parameters to complete deterministic inferences such as numerical computations and set operations.
To address the above challenges and meet the requirements of professional domain knowledge ser-
vices, we propose Knowledge Augmented Generation(KAG), which fully leverages the comple-
mentary characteristics of KG and RAG techniques. More than merely integrating graph structures
into the knowledge base process, it incorporates the semantic types and relationships of knowledge
graph and the commonly used Logical Forms from KGQA (Knowledge Graph Question Answer-
ing) into the retrieval and generation process. As shown in Figure 1, this framework involves the
optimization of the following ﬁve modules:
• We proposed a LLM friendly knowledge representation framework LLMFriSPG. We
refer to the hierarchical structure of data, information, and knowledge of DIKW to upgrade
SPG to be friendly to LLMs, named LLMFriSPG, to make it compatible with schema-
free information extraction and schema-constrained expert knowledge construction on the
same knowledge type (such as entity type, event type), and supports the mutual-indexing
representation between graph structure and original text chunks, which facilitates the con-
struction of graph-structure-based inverted index and facilitates the uniﬁed representation,
reasoning, and retrieval of logical form.
• We proposed a logical-form-guided hybrid solving and reasoning engine. It includes
three types of operators: planning, reasoning and retrieval, transforming natural language
questions into a problem-solving process that combines language and symbols. Each step
in the process can utilize different operators such as exact match retrieval, text retrieval,
numerical computation, or semantic reasoning, thereby achieving the integration of four
distinct problem-solving processes: retrieval, KG reasoning, language reasoning, and nu-
merical computation.
• We proposed a knowledge alignment approach based on semantic reasoning. Deﬁne
domain knowledge as various semantic relations such as synonyms, hypernyms, and inclu-
sions. Semantic reasoning is performed in both ofﬂine KG indexing and online retrieval
2


