import { useEffect, useRef, useState, MouseEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './News.css';

interface NewsArticle {
    id: number;
    titleAr: string;
    titleEn: string;
    descriptionAr: string;
    descriptionEn: string;
    extendedAr: string;
    extendedEn: string;
    factsAr: { value: string; label: string }[];
    factsEn: { value: string; label: string }[];
    date: string;
    readTime: string;
    image: string;
    category: string;
}

const PLACEHOLDER_IMG = 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800';

const newsData: NewsArticle[] = [
    {
        id: 1,
        titleAr: 'مزارع شهيلا تُطلق أكبر خط إنتاج للبيض في المملكة',
        titleEn: 'Shehaila Farms Launches Largest Egg Production Line in the Kingdom',
        descriptionAr: 'تُعلن مزارع شهيلا عن إطلاق خط إنتاج متطور بطاقة تتجاوز مليون بيضة يومياً، مُعززةً مسيرتها في دعم الأمن الغذائي الوطني وفق رؤية المملكة 2030.',
        descriptionEn: 'Shehaila Farms announces the launch of an advanced production line with a capacity exceeding one million eggs daily, reinforcing its commitment to national food security aligned with Vision 2030.',
        extendedAr: 'يُمثّل هذا الخط الإنتاجي نقلة نوعية في صناعة الدواجن السعودية، إذ يعتمد على أحدث تقنيات الميكنة الكاملة والتحكم الآلي في درجات الحرارة والرطوبة لضمان أعلى مستويات جودة البيض. تستوعب منشأة الإنتاج الجديدة ما يزيد على مليوني دجاجة بياضة، مع نظام متكامل لتتبع سلامة الغذاء من المزرعة حتى وصول المنتج للمستهلك. يُتوقع أن يُسهم هذا المشروع في خفض الاعتماد على الاستيراد بنسبة 18٪، ودعم توطين 400 وظيفة جديدة في القطاع الزراعي.',
        extendedEn: 'This production line represents a qualitative leap in Saudi poultry industry, relying on state-of-the-art full automation and climate-control technology to ensure the highest egg quality standards. The new facility accommodates over two million laying hens, integrated with a comprehensive food safety traceability system from farm to consumer. The project is expected to reduce import dependency by 18% and support localisation of 400 new jobs in the agricultural sector.',
        factsAr: [{ value: '+١م', label: 'بيضة/يوم' }, { value: '٢م+', label: 'دجاجة' }, { value: '١٨٪', label: 'تخفيض الاستيراد' }, { value: '٤٠٠', label: 'وظيفة' }],
        factsEn: [{ value: '1M+', label: 'Eggs/Day' }, { value: '2M+', label: 'Hens' }, { value: '18%', label: 'Import Reduction' }, { value: '400', label: 'Jobs' }],
        date: '١٥ أبريل ٢٠٢٦',
        readTime: '4 min read',
        image: PLACEHOLDER_IMG,
        category: 'توسعات',
    },
    {
        id: 2,
        titleAr: 'شراكة استراتيجية مع كبرى شركات التوزيع الغذائي',
        titleEn: 'Strategic Partnership with Leading Food Distribution Companies',
        descriptionAr: 'وقّعت مزارع شهيلا اتفاقية شراكة استراتيجية مع شركة التوزيع الوطنية لتعزيز سلسلة الإمداد وضمان وصول منتجاتها إلى جميع مناطق المملكة.',
        descriptionEn: 'Shehaila Farms signed a strategic partnership agreement with a national distribution company to enhance the supply chain and ensure product availability across all regions.',
        extendedAr: 'تشمل الاتفاقية توزيع منتجات مزارع شهيلا عبر شبكة تضم أكثر من 1200 نقطة بيع في 13 منطقة إدارية، بما فيها المناطق النائية والحدودية. كما تتضمن الشراكة تطوير منظومة لوجستية متكاملة تعتمد على مركبات مبردة من الجيل الجديد وتقنيات تتبع GPS في الوقت الفعلي، مما يضمن الحفاظ على سلسلة التبريد بدقة عالية حتى نقطة البيع الأخيرة.',
        extendedEn: 'The agreement covers distribution of Shehaila Farms products through a network of over 1,200 outlets across 13 administrative regions, including remote and border areas. The partnership also includes developing an integrated logistics system relying on next-generation refrigerated vehicles and real-time GPS tracking, ensuring cold chain integrity all the way to the final point of sale.',
        factsAr: [{ value: '١٢٠٠+', label: 'نقطة بيع' }, { value: '١٣', label: 'منطقة' }, { value: 'GPS', label: 'تتبع فوري' }],
        factsEn: [{ value: '1,200+', label: 'Outlets' }, { value: '13', label: 'Regions' }, { value: 'GPS', label: 'Live Tracking' }],
        date: '٢ مارس ٢٠٢٦',
        readTime: '3 min read',
        image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'شراكات',
    },
    {
        id: 3,
        titleAr: 'حصول المزارع على شهادة الجودة الدولية ISO 22000',
        titleEn: 'Farms Receive ISO 22000 International Quality Certification',
        descriptionAr: 'حصلت مزارع شهيلا على شهادة الجودة الدولية ISO 22000 في مجال سلامة الغذاء، مما يعكس التزامها بأعلى معايير الجودة والنظافة.',
        descriptionEn: 'Shehaila Farms received the ISO 22000 international quality certification in food safety, reflecting its commitment to the highest quality and hygiene standards.',
        extendedAr: 'جاء الحصول على هذه الشهادة المرموقة بعد مسيرة إصلاحية شاملة استغرقت 18 شهراً، تضمنت إعادة هيكلة الأنظمة الإنتاجية وتأهيل المختبرات وتدريب الكوادر البشرية. تمنح الشهادة مزارع شهيلا ميزة تنافسية مزدوجة: فتح أسواق تصديرية جديدة في أوروبا وآسيا، ورفع ثقة المستهلك المحلي بمنتجاتها. يُعدّ هذا الإنجاز الأول من نوعه بين مزارع الدواجن في المنطقة الجنوبية من المملكة.',
        extendedEn: 'This prestigious certification came after a comprehensive 18-month reform journey, involving restructuring production systems, upgrading laboratories, and training human resources. The certification gives Shehaila Farms a dual competitive edge: opening new export markets in Europe and Asia, and elevating domestic consumer confidence. This achievement is the first of its kind among poultry farms in the southern region of the Kingdom.',
        factsAr: [{ value: '١٨', label: 'شهراً من الإعداد' }, { value: 'ISO', label: '22000' }, { value: 'الأولى', label: 'بالمنطقة الجنوبية' }],
        factsEn: [{ value: '18mo', label: 'Preparation' }, { value: 'ISO', label: '22000' }, { value: '1st', label: 'Southern Region' }],
        date: '١٨ فبراير ٢٠٢٦',
        readTime: '3 min read',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'جودة',
    },
    {
        id: 4,
        titleAr: 'مبادرة الاستدامة: الطاقة الشمسية في قلب المزرعة',
        titleEn: 'Sustainability Initiative: Solar Energy at the Heart of the Farm',
        descriptionAr: 'أطلقت مزارع شهيلا مشروع الطاقة الشمسية الذي سيُغطي ٦٠٪ من احتياجات المزرعة الكهربائية، دعماً لمستهدفات الاستدامة البيئية.',
        descriptionEn: "Shehaila Farms launched a solar energy project that will cover 60% of the farm's electricity needs, supporting environmental sustainability targets.",
        extendedAr: 'يتضمن المشروع تركيب 4800 لوح شمسي موزعة على أسطح مباني المزرعة بمساحة تتجاوز 22000 متر مربع، مع منظومة تخزين طاقة تضمن الإمداد المستمر حتى خلال ساعات الليل. من المتوقع أن يُخفّض المشروع انبعاثات ثاني أكسيد الكربون بمقدار 3200 طن سنوياً، ويُوفّر على المزرعة ما يعادل 4.5 مليون ريال سعودي من فاتورة الكهرباء السنوية.',
        extendedEn: 'The project includes installing 4,800 solar panels across farm building rooftops covering over 22,000 square meters, with an energy storage system ensuring continuous supply even during night hours. The project is expected to reduce CO₂ emissions by 3,200 tonnes per year and save the farm approximately SAR 4.5 million annually in electricity costs.',
        factsAr: [{ value: '٤٨٠٠', label: 'لوح شمسي' }, { value: '٦٠٪', label: 'تغطية الكهرباء' }, { value: '٣٢٠٠ط', label: 'CO₂ سنوياً' }],
        factsEn: [{ value: '4,800', label: 'Solar Panels' }, { value: '60%', label: 'Power Coverage' }, { value: '3,200t', label: 'CO₂/yr Saved' }],
        date: '٥ يناير ٢٠٢٦',
        readTime: '4 min read',
        image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'استدامة',
    },
    {
        id: 5,
        titleAr: 'افتتاح مركز البحث والتطوير لتحسين سلالات الدواجن',
        titleEn: 'Opening of R&D Center for Poultry Breed Improvement',
        descriptionAr: 'افتتحت مزارع شهيلا مركز البحث والتطوير المتخصص في تحسين الإنتاجية وصحة الدواجن، بالتعاون مع نخبة من الخبراء الزراعيين.',
        descriptionEn: 'Shehaila Farms inaugurated a specialized R&D center focused on improving productivity and poultry health in collaboration with leading agricultural experts.',
        extendedAr: 'يضم المركز 12 مختبراً متخصصاً تجمع بين علوم الجينوميكس وتغذية الدواجن وبيولوجيا الأمراض، إلى جانب وحدة ميدانية تجريبية تستوعب 50,000 طائر. يتعاون المركز مع جامعة الملك فيصل والجامعة الأمريكية في بيروت لتطوير سلالات عالية الإنتاجية مُتكيّفة مع المناخ الصحراوي السعودي. يُمثّل هذا المركز أحد أكبر الاستثمارات الخاصة في البحث الزراعي التطبيقي بالمملكة.',
        extendedEn: 'The center houses 12 specialized laboratories combining genomics, poultry nutrition, and disease biology, alongside an experimental field unit accommodating 50,000 birds. It collaborates with King Faisal University and the American University of Beirut to develop high-productivity breeds adapted to Saudi desert climate. This center represents one of the largest private investments in applied agricultural research in the Kingdom.',
        factsAr: [{ value: '١٢', label: 'مختبر' }, { value: '٥٠ك', label: 'طائر تجريبي' }, { value: '٢', label: 'شراكة جامعية' }],
        factsEn: [{ value: '12', label: 'Labs' }, { value: '50K', label: 'Trial Birds' }, { value: '2', label: 'University Partners' }],
        date: '٢٠ ديسمبر ٢٠٢٥',
        readTime: '5 min read',
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'ابتكار',
    },
    {
        id: 6,
        titleAr: 'مزارع شهيلا تُكرّم موظفيها المتميزين في احتفالية سنوية',
        titleEn: 'Shehaila Farms Honours Outstanding Employees at Annual Ceremony',
        descriptionAr: 'احتفت مزارع شهيلا بأبطال النجاح من موظفيها في حفل تكريم سنوي، إيماناً منها بأن الكادر البشري هو العمود الفقري للتطور.',
        descriptionEn: 'Shehaila Farms celebrated its outstanding employees at an annual recognition ceremony, affirming that human capital is the backbone of success.',
        extendedAr: 'شهدت الاحتفالية تكريم 42 موظفاً متميزاً من مختلف الأقسام التشغيلية والإدارية، حيث حصل كل منهم على جائزة نقدية ودرع تكريمية وفرصة تدريبية دولية. كما أعلنت الإدارة عن إطلاق برنامج "قادة المستقبل" لاستقطاب وتأهيل الكفاءات الشابة من خريجي الجامعات السعودية، بهدف بناء خط قيادي مستدام على مدى السنوات الخمس المقبلة.',
        extendedEn: 'The ceremony honoured 42 outstanding employees from various operational and administrative departments, each receiving a cash prize, a commemorative shield, and an international training opportunity. Management also announced the launch of the "Future Leaders" programme to attract and develop young talent from Saudi university graduates, aiming to build a sustainable leadership pipeline over the next five years.',
        factsAr: [{ value: '٤٢', label: 'موظفاً مُكرَّماً' }, { value: '٥', label: 'سنوات تخطيط' }, { value: '١٠٠٪', label: 'سعودة الإدارة' }],
        factsEn: [{ value: '42', label: 'Honourees' }, { value: '5yr', label: 'Pipeline Plan' }, { value: '100%', label: 'Saudi Leadership' }],
        date: '١٠ نوفمبر ٢٠٢٥',
        readTime: '3 min read',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'مجتمع',
    },
    {
        id: 7,
        titleAr: 'توسعة خطوط التبريد والتغليف لضمان جودة المنتج',
        titleEn: 'Expansion of Cold Chain and Packaging Lines to Ensure Product Quality',
        descriptionAr: 'ضخّت مزارع شهيلا استثمارات جديدة في خطوط التبريد والتغليف الحديثة لضمان الحفاظ على جودة البيض من المزرعة حتى المستهلك.',
        descriptionEn: 'Shehaila Farms invested in modern cold chain and packaging lines to ensure egg quality is maintained from farm to consumer.',
        extendedAr: 'تشمل الاستثمارات الجديدة تركيب غرف تبريد سريع بتقنية IQF تُحافظ على درجة حرارة ثابتة تبلغ 4°م طوال سلسلة التوزيع، إضافةً إلى خط تغليف آلي يعمل بسرعة 120,000 بيضة/ساعة مع طباعة بيانات التتبع مباشرةً على كل صينية. تُتيح هذه المنظومة تمديد العمر التخزيني للبيض من 21 يوماً إلى 35 يوماً، مما يوسّع النطاق الجغرافي للتوزيع داخل المملكة وخارجها.',
        extendedEn: 'The new investments include installing IQF rapid-cooling rooms maintaining a constant 4°C throughout the distribution chain, plus an automated packaging line operating at 120,000 eggs/hour with traceability data printed directly on each tray. This system extends egg shelf life from 21 to 35 days, expanding the geographic distribution range both within and beyond the Kingdom.',
        factsAr: [{ value: '٤°م', label: 'تبريد ثابت' }, { value: '١٢٠ك', label: 'بيضة/ساعة' }, { value: '٣٥ يوم', label: 'عمر تخزيني' }],
        factsEn: [{ value: '4°C', label: 'Constant Cold' }, { value: '120K', label: 'Eggs/Hour' }, { value: '35 Days', label: 'Shelf Life' }],
        date: '٣ أكتوبر ٢٠٢٥',
        readTime: '3 min read',
        image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'توسعات',
    },
    {
        id: 8,
        titleAr: 'مشاركة مزارع شهيلا في معرض الزراعة السعودي ٢٠٢٥',
        titleEn: 'Shehaila Farms Participates in Saudi Agriculture Exhibition 2025',
        descriptionAr: 'شاركت مزارع شهيلا بجناح متميز في معرض الزراعة السعودي، حيث عرضت أحدث تقنياتها ومنتجاتها أمام نخبة من المستثمرين.',
        descriptionEn: 'Shehaila Farms participated with a distinguished pavilion at the Saudi Agriculture Exhibition, showcasing its latest technologies and products to investors and specialists.',
        extendedAr: 'أقام جناح مزارع شهيلا على مساحة 800 متر مربع يُعرض فيه نماذج حية لأنظمة التربية الحديثة وتجارب تفاعلية لزوار المعرض. استقطب الجناح أكثر من 6000 زائر خلال أيام المعرض الخمسة، أسفرت عن إبرام 7 مذكرات تفاهم مع موزعين ومستثمرين من 4 دول خليجية. كما أطلقت الشركة خلال المعرض تطبيق "شهيلا" الذكي لتتبع المنتجات وطلب التوريد المباشر.',
        extendedEn: "Shehaila Farms' pavilion spanned 800 square metres, displaying live models of modern farming systems and interactive visitor experiences. The pavilion attracted over 6,000 visitors during the five-day exhibition, resulting in 7 memoranda of understanding with distributors and investors from 4 Gulf countries. The company also launched the 'Shehaila' smart app for product tracing and direct supply ordering during the exhibition.",
        factsAr: [{ value: '٨٠٠م²', label: 'مساحة الجناح' }, { value: '٦٠٠٠+', label: 'زائر' }, { value: '٧', label: 'مذكرات تفاهم' }],
        factsEn: [{ value: '800m²', label: 'Pavilion' }, { value: '6,000+', label: 'Visitors' }, { value: '7', label: 'MoUs Signed' }],
        date: '١٥ سبتمبر ٢٠٢٥',
        readTime: '4 min read',
        image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'فعاليات',
    },
    {
        id: 9,
        titleAr: 'برنامج سلامة الغذاء: تدريب ٢٠٠ موظف على المعايير الدولية',
        titleEn: 'Food Safety Program: Training 200 Employees on International Standards',
        descriptionAr: 'نفّذت مزارع شهيلا برنامجاً تدريبياً شاملاً لـ٢٠٠ موظف في مجال سلامة الغذاء والممارسات الزراعية الجيدة.',
        descriptionEn: 'Shehaila Farms implemented a comprehensive training program for 200 employees in food safety and good agricultural practices.',
        extendedAr: 'امتد البرنامج التدريبي على مدى 8 أسابيع وشمل 3 مستويات من التأهيل: التدريب الأساسي، والمتقدم، والتأهيل للتدقيق الداخلي. استُعين بمدربين دوليين معتمدين من منظمة السلامة الغذائية البريطانية RSPH، كما تضمّن البرنامج محاكاة عملية لسيناريوهات الطوارئ الغذائية. أنهى 98٪ من المشاركين البرنامج بنجاح وحصلوا على شهادات دولية معتمدة، مما يُعزّز مؤهلات فريق الرقابة الداخلية للمزارع.',
        extendedEn: 'The training programme spanned 8 weeks and covered 3 certification levels: basic training, advanced, and internal audit qualification. Internationally certified trainers from the UK-based RSPH were engaged, and the programme included practical simulations of food emergency scenarios. 98% of participants successfully completed the programme and received internationally recognised certificates, strengthening the farms internal quality control team qualifications.',
        factsAr: [{ value: '٢٠٠', label: 'موظف' }, { value: '٨', label: 'أسابيع' }, { value: '٩٨٪', label: 'نجاح' }],
        factsEn: [{ value: '200', label: 'Employees' }, { value: '8wk', label: 'Duration' }, { value: '98%', label: 'Pass Rate' }],
        date: '٢٨ أغسطس ٢٠٢٥',
        readTime: '3 min read',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'تطوير',
    },
];

/* ── Intersection observer hook ── */
function useVisible(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

/* ── NewsCard ── */
interface NewsCardProps {
    article: NewsArticle;
    delay?: number;
    onReadMore: (article: NewsArticle) => void;
}

function NewsCard({ article, delay = 0, onReadMore }: NewsCardProps) {
    const { ref, visible } = useVisible();
    const { t } = useLanguage();

    return (
        <div
            ref={ref}
            className={`news-card${visible ? ' news-card--visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="news-card__image-wrap">
                <img src={article.image} alt={t(article.titleAr, article.titleEn)} className="news-card__image" loading="lazy" />
                <span className="news-card__category">{article.category}</span>
            </div>
            <div className="news-card__body">
                <div className="news-card__date">
                    <CalendarIcon />
                    <span>{article.date}</span>
                </div>
                <h3 className="news-card__title">{t(article.titleAr, article.titleEn)}</h3>
                <p className="news-card__desc">{t(article.descriptionAr, article.descriptionEn)}</p>
                <button className="news-card__btn" onClick={() => onReadMore(article)}>
                    <span>{t('اقرأ المزيد', 'Read More')}</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
}

/* ── NewsModal ──
   Fix: a single backdrop div handles close-on-click.
   The panel calls e.stopPropagation() so clicks inside
   never bubble to the backdrop.
── */
interface NewsModalProps {
    article: NewsArticle | null;
    isOpen: boolean;
    onClose: () => void;
}

function NewsModal({ article, isOpen, onClose }: NewsModalProps) {
    const { t, language } = useLanguage();

    /* Lock body scroll while open */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    /* Close on Escape */
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    if (!isOpen || !article) return null;

    const facts = language === 'ar' ? article.factsAr : article.factsEn;

    return (
        /* Backdrop: clicking it closes the modal */
        <div className="news-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
            {/* Panel: stops propagation so clicks inside don't hit the backdrop */}
            <div
                className="news-modal-panel"
                onClick={(e: MouseEvent) => e.stopPropagation()}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
                {/* Hero image */}
                <div className="news-modal-panel__hero">
                    <img src={article.image} alt={t(article.titleAr, article.titleEn)} />
                    <div className="news-modal-panel__hero-overlay" />
                    <span className="news-modal-panel__category">{article.category}</span>
                    <button
                        className="news-modal-panel__close"
                        onClick={onClose}
                        aria-label={t('إغلاق', 'Close')}
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="news-modal-panel__body">
                    <div className="news-modal-panel__meta">
                        <div className="news-modal-panel__date">
                            <CalendarIcon />
                            <span>{article.date}</span>
                        </div>
                        <div className="news-modal-panel__divider" />
                        <span className="news-modal-panel__read-time">{article.readTime}</span>
                    </div>

                    <h2 className="news-modal-panel__title">{t(article.titleAr, article.titleEn)}</h2>
                    <div className="news-modal-panel__sep" />

                    <p className="news-modal-panel__lead">{t(article.descriptionAr, article.descriptionEn)}</p>
                    <p className="news-modal-panel__text">{t(article.extendedAr, article.extendedEn)}</p>

                    {facts.length > 0 && (
                        <div className="news-modal-panel__facts">
                            {facts.map((f, i) => (
                                <div className="news-modal-panel__fact" key={i}>
                                    <span className="news-modal-panel__fact-value">{f.value}</span>
                                    <span className="news-modal-panel__fact-label">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="news-modal-panel__footer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span className="news-modal-panel__share-label">{t('شارك', 'Share')}</span>
                        <div className="news-modal-panel__share-btns">
                            <button className="news-modal-panel__share-btn" aria-label="Twitter/X">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>
                            </button>
                            <button className="news-modal-panel__share-btn" aria-label="LinkedIn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                            </button>
                            <button className="news-modal-panel__share-btn" aria-label="Copy link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </button>
                        </div>
                    </div>
                    <button className="news-modal-panel__close-text" onClick={onClose}>
                        {t('إغلاق', 'Close')}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ── Icon helpers ── */
function CalendarIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

/* ── Main News page ── */
export default function News() {
    const { t, language, toggleLanguage } = useLanguage();
    const heroRef = useRef<HTMLDivElement>(null);
    const [heroVisible, setHeroVisible] = useState(false);
    const featuredRef = useRef<HTMLDivElement>(null);
    const [featuredVisible, setFeaturedVisible] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const el = featuredRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setFeaturedVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const handleReadMore = (article: NewsArticle) => {
        setSelectedArticle(article);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedArticle(null), 300);
    };

    const [featured, ...rest] = newsData;

    return (
        <main className="news-page">
            {/* Hero */}
            <section className={`news-hero${heroVisible ? ' news-hero--visible' : ''}`} ref={heroRef}>
                <div className="news-hero__overlay" />
                <div className="news-hero__content">
                    <span className="news-hero__eyebrow">
                        {t('مزارع شهيلا · Shehaila Farms', 'Shehaila Farms · مزارع شهيلا')}
                    </span>
                    <h1 className="news-hero__title">{t('أخبارنا', 'Our News')}</h1>
                    <p className="news-hero__subtitle">
                        {t(
                            'تابع آخر مستجدات مزارع شهيلا — من التوسعات والشراكات الاستراتيجية إلى مبادرات الجودة والاستدامة التي تُشكّل مستقبل الزراعة في المملكة',
                            'Follow the latest updates from Shehaila Farms — from expansions and strategic partnerships to quality and sustainability initiatives shaping the future of agriculture in the Kingdom'
                        )}
                    </p>
                    <div className="news-hero__divider" />
                </div>
                <div className="news-hero__shapes">
                    <div className="news-hero__shape news-hero__shape--1" />
                    <div className="news-hero__shape news-hero__shape--2" />
                    <div className="news-hero__shape news-hero__shape--3" />
                </div>
            </section>

            {/* Featured */}
            <section className="news-section">
                <div className="news-container">
                    <div className="section-header">
                        <span className="section-header__label">{t('الخبر الرئيسي', 'Featured News')}</span>
                        <h2 className="section-header__title">{t('أبرز الأخبار', 'Latest News')}</h2>
                        <div className="section-header__line" />
                    </div>
                    <div ref={featuredRef} className={`featured-card${featuredVisible ? ' featured-card--visible' : ''}`}>
                        <div className="featured-card__image-wrap">
                            <img src={featured.image} alt={t(featured.titleAr, featured.titleEn)} className="featured-card__image" />
                            <span className="featured-card__category">{featured.category}</span>
                        </div>
                        <div className="featured-card__body">
                            <div className="featured-card__date">
                                <CalendarIcon />
                                <span>{featured.date}</span>
                            </div>
                            <h2 className="featured-card__title">{t(featured.titleAr, featured.titleEn)}</h2>
                            <p className="featured-card__desc">{t(featured.descriptionAr, featured.descriptionEn)}</p>
                            <div className="featured-card__actions">
                                <button className="btn-primary" onClick={() => handleReadMore(featured)}>
                                    <span>{t('اقرأ الخبر كاملاً', 'Read Full Article')}</span>
                                    <ArrowIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="news-section news-section--grid">
                <div className="news-container">
                    <div className="section-header">
                        <span className="section-header__label">{t('جميع الأخبار', 'All News')}</span>
                        <h2 className="section-header__title">{t('آخر المستجدات', 'Latest Updates')}</h2>
                        <div className="section-header__line" />
                    </div>
                    <div className="news-grid">
                        {rest.map((article, i) => (
                            <NewsCard key={article.id} article={article} delay={i * 80} onReadMore={handleReadMore} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* <section className="news-cta">
                <div className="news-container">
                    <div className="news-cta__inner">
                        <h2 className="news-cta__title">{t('ابقَ على اطّلاع دائم', 'Stay Updated')}</h2>
                        <p className="news-cta__text">
                            {t(
                                'اشترك في نشرتنا الإخبارية ليصلك كل جديد من مزارع شهيلا مباشرةً إلى بريدك الإلكتروني',
                                'Subscribe to our newsletter and receive the latest updates from Shehaila Farms directly in your email'
                            )}
                        </p>
                        <div className="news-cta__form">
                            <input
                                type="email"
                                placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email address')}
                                className="news-cta__input"
                                dir={language === 'ar' ? 'rtl' : 'ltr'}
                            />
                            <button className="news-cta__submit">{t('اشتراك', 'Subscribe')}</button>
                        </div>
                    </div>
                </div>
            </section> */}

            <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
}
