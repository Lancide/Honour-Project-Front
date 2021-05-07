import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  content1 = '  The gene could code for protein to express a trait of the organism.  The protein coding gene serves as the template for ribonuclease to generate mRNA transcript. The ribosome forge peptides by deciphering the codons, a trinucleotide pairs of DNA or RNA bases each of which associate to a particular amino acid or a termination of translation. Theoretically, an RNA sequence with in-frame start codon and stop codon could code for protein. These potentially translatable sequence is defined as ORF.\n' +
    'While most canonical ORF have various length,  small ORF (sORF) are equal or less than 100 codons.  A sORFs might be classified by their functions and locations in the genome. They were detected by ribosome profiling in untranslated region (UTR) of long coding mRNA, intergenic sequences, long non-coding RNA (lncRNA) and within the known coding sequence. These sORF might code for functional small peptides (sPEP), regulate canonical ORF translation, or occur randomly.\n' +
    'Specifically, the sORF in lncRNA and intergenic area are the most numerous, however, there are research evidence suggesting that these type are often not transcribed.\n';
  content2 = 'The sORFs in the UTR are known to regulate the translation processes. The upstream UTR might regulate oncogene expression in human. Recent studies in human and zebrafish had compared the expression of canonical sequence with interrupted and frameshifted dsORF. The conclusion specifies that it is the location rather than the protein product of dsORF that enhance the canonical expression. \n' +
    'An enlarging numbers of sORF are found to be putative. The sORF might code for sPEP or short isoform of canonical ORFs. It was suggested that the sPEP might be consequent from leaky scanning of ribosome and preinitiation of translation. \n' +
    'Studies on variety of species indicated that uRNA, coding sORF (short CDSs) and isoform sORF are translatable. Researches on yeast,  D. melanogaster, and plant have showed that numerous sORFs encoded sPEPs result in phenotypes. Studies on human genes have also shown that deficient expression of uORF might be disease-causing.\n';

  constructor() {

  }

  ngOnInit(): void {
  }

}
