// "Smile stories": the clinic's own patient photos (in /public/images/results).
// Each story plays its stages in order (Before → … → After).
// Labels describe what is visible in the photos. Have the doctor confirm each
// label and that every patient agreed to their photos being shown.
// `focus` is the CSS object-position used to keep the teeth in frame.
export const stories = [
  {
    id: 'missing-tooth',
    title: 'Missing front tooth replaced',
    tag: 'Tooth replacement',
    note: 'A gap left by a lost upper front tooth, filled so the smile looks complete again.',
    stages: [
      { label: 'Before', src: '/images/results/missing-tooth-before.jpg', alt: 'Before: smile with a missing upper front tooth' },
      { label: 'After', src: '/images/results/missing-tooth-after.jpg', alt: 'After: the gap filled with a new tooth' },
    ],
  },
  {
    id: 'implant',
    title: 'Implant-supported teeth',
    tag: 'Dental implants',
    note: 'Missing upper front teeth replaced with new teeth fixed on two implants.',
    stages: [
      { label: 'Before', src: '/images/results/implant-1.jpg', alt: 'Before: missing and damaged upper front teeth' },
      { label: 'Implants placed', src: '/images/results/implant-2.jpg', alt: 'Two dental implants placed in the upper jaw' },
      { label: 'After', src: '/images/results/implant-3.jpg', alt: 'After: new upper front teeth fixed on the implants' },
    ],
  },
  {
    id: 'full-mouth',
    title: 'Full-mouth rehabilitation',
    tag: 'Full mouth',
    note: 'Several missing and worn teeth replaced with a complete new set.',
    stages: [
      { label: 'Before', src: '/images/results/full-mouth-before.jpg', alt: 'Before: several missing and worn upper teeth' },
      { label: 'After', src: '/images/results/full-mouth-after.jpg', alt: 'After: a complete set of new upper teeth' },
    ],
  },
  {
    id: 'decay',
    title: 'Decayed front teeth rebuilt',
    tag: 'Restoration',
    note: 'Badly decayed upper front teeth rebuilt into a clean, even row.',
    stages: [
      { label: 'Before', src: '/images/results/decay-1.jpg', alt: 'Before: decayed and broken upper front teeth' },
      { label: 'Inside view', src: '/images/results/decay-2.jpg', alt: 'View from below showing the decayed teeth' },
      { label: 'After', src: '/images/results/decay-3.jpg', alt: 'After: the front teeth rebuilt' },
    ],
  },
  {
    id: 'broken',
    title: 'Broken front tooth restored',
    tag: 'Restoration',
    note: 'A decayed, broken front tooth rebuilt to match its neighbours.',
    stages: [
      { label: 'Before', src: '/images/results/broken-before.jpg', alt: 'Before: a decayed and broken upper front tooth' },
      { label: 'After', src: '/images/results/broken-after.jpg', alt: 'After: the same tooth rebuilt and matching the others' },
    ],
  },
  {
    id: 'step',
    title: 'Broken tooth, step by step',
    tag: 'Restoration',
    note: 'A broken front tooth, prepared and restored in the same smile line.',
    stages: [
      { label: 'Before', src: '/images/results/step-1.jpg', alt: 'Before: a broken upper front tooth' },
      { label: 'During', src: '/images/results/step-2.jpg', alt: 'During treatment: the tooth prepared' },
      { label: 'After', src: '/images/results/step-3.jpg', alt: 'After: the front tooth restored' },
    ],
  },
  {
    id: 'chip',
    title: 'Chipped tooth repaired',
    tag: 'Cosmetic',
    note: 'A chipped front tooth and uneven edges smoothed into an even smile.',
    stages: [
      { label: 'Before', src: '/images/results/chip-before.jpg', alt: 'Before: a chipped upper front tooth with uneven edges' },
      { label: 'After', src: '/images/results/chip-after.jpg', alt: 'After: an even row of front teeth' },
    ],
  },
  {
    id: 'makeover',
    title: 'Smile makeover',
    tag: 'Cosmetic',
    note: 'Gaps and decay between the front teeth closed for a smooth, natural smile.',
    focus: 'center 62%',
    stages: [
      { label: 'Before', src: '/images/results/makeover-before.jpg', alt: 'Before: gaps and decay between the front teeth' },
      { label: 'After', src: '/images/results/makeover-after.jpg', alt: 'After: the gaps closed and the front teeth smooth' },
    ],
  },
  {
    id: 'reshape',
    title: 'Front teeth restored',
    tag: 'Cosmetic',
    note: 'Stained, chipped front teeth restored for a cleaner, brighter smile.',
    stages: [
      { label: 'Before', src: '/images/results/reshape-before.jpg', alt: 'Before: stained and chipped front teeth' },
      { label: 'After', src: '/images/results/reshape-after.jpg', alt: 'After: the same front teeth restored' },
    ],
  },
];
