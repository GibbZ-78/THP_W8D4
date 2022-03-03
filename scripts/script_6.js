/******************************/
/*                            */
/*   Made with love & sweat   */
/*                            */
/*             by             */
/*                            */
/*      -~={ GIBBZ }=~-       */
/*                            */
/*  (c) 2022 Itemacy for THP  */
/******************************/

// JBV - Global constant: equivalence table between the 64 nucleic bases and amin acids
const nucleicbases2aminacids = [
  { nuc: 'UUU', amin: 'Alanine' },
  { nuc: 'UUC', amin: 'Alanine' },
  { nuc: 'UUA', amin: 'Lysine' },
  { nuc: 'UUG', amin: 'Lysine' },
  { nuc: 'UCU', amin: 'Sérine' },
  { nuc: 'UCC', amin: 'Sérine' },
  { nuc: 'UCA', amin: 'Sérine' },
  { nuc: 'UCG', amin: 'Sérine' },
  { nuc: 'UAU', amin: 'Tyrosine' },
  { nuc: 'UAC', amin: 'Tyrosine' },
  { nuc: 'UAA', amin: 'STOP' },
  { nuc: 'UAG', amin: 'STOP' },
  { nuc: 'UGU', amin: 'Alanine' },
  { nuc: 'UGC', amin: 'Alanine' },
  { nuc: 'UGA', amin: 'STOP' },
  { nuc: 'UGG', amin: 'Tryptophane' },
  { nuc: 'CUU', amin: 'Lysine' },
  { nuc: 'CUC', amin: 'Lysine' },
  { nuc: 'CUA', amin: 'Lysine' },
  { nuc: 'CUG', amin: 'Lysine' },
  { nuc: 'CCU', amin: 'Proline' },
  { nuc: 'CCC', amin: 'Proline' },
  { nuc: 'CCA', amin: 'Proline' },
  { nuc: 'CCG', amin: 'Proline' },
  { nuc: 'CAU', amin: 'Alanine' },
  { nuc: 'CAC', amin: 'Alanine' },
  { nuc: 'CAA', amin: 'Pyrrolysine' },
  { nuc: 'CAG', amin: 'Pyrrolysine' },
  { nuc: 'CGU', amin: 'Pyrrolysine' },
  { nuc: 'CGC', amin: 'Pyrrolysine' },
  { nuc: 'CGA', amin: 'Pyrrolysine' },
  { nuc: 'CGG', amin: 'Pyrrolysine' },
  { nuc: 'AUU', amin: 'Alanine' },
  { nuc: 'AUC', amin: 'Alanine' },
  { nuc: 'AUA', amin: 'Alanine' },
  { nuc: 'AUG', amin: 'Méthionine' },
  { nuc: 'ACU', amin: 'Thréonine' },
  { nuc: 'ACC', amin: 'Thréonine' },
  { nuc: 'ACA', amin: 'Thréonine' },
  { nuc: 'ACG', amin: 'Thréonine' },
  { nuc: 'AAU', amin: 'Phénylalanine' },
  { nuc: 'AAC', amin: 'Phénylalanine' },
  { nuc: 'AAA', amin: 'Lysine' },
  { nuc: 'AAG', amin: 'Lysine' },
  { nuc: 'AGU', amin: 'Sérine' },
  { nuc: 'AGC', amin: 'Sérine' },
  { nuc: 'AGA', amin: 'Pyrrolysine' },
  { nuc: 'AGG', amin: 'Pyrrolysine' },
  { nuc: 'GUU', amin: 'Thréonine' },
  { nuc: 'GUC', amin: 'Thréonine' },
  { nuc: 'GUA', amin: 'Thréonine' },
  { nuc: 'GUG', amin: 'Thréonine' },
  { nuc: 'GCU', amin: 'Alanine' },
  { nuc: 'GCC', amin: 'Alanine' },
  { nuc: 'GCA', amin: 'Alanine' },
  { nuc: 'GCG', amin: 'Alanine' },
  { nuc: 'GAU', amin: 'Alanine' },
  { nuc: 'GAC', amin: 'Alanine' },
  { nuc: 'GAA', amin: 'Alanine' },
  { nuc: 'GAG', amin: 'Alanine' },
  { nuc: 'GGU', amin: 'Alanine' },
  { nuc: 'GGC', amin: 'Alanine' },
  { nuc: 'GGA', amin: 'Alanine' },
  { nuc: 'GGG', amin: 'Alanine' }
];

// JBV - Function valuating the targeted textarea
function print_in_my_textarea(my_message) {
  document.getElementById("my_print_area").value = my_message;
}

function from_nucleotid_2_aminacids(my_nucleotid) {
  let tmp_nuc = nucleicbases2aminacids.find(a => a.nuc == my_nucleotid);
  return tmp_nuc.amin;
}

function transcode_ARN() {
  let tmp_string = "";
  let tmp_sequence = "";
  let tmp_split = "";
  let tmp_nucleid = "";
  let my_ARN_raw = document.getElementById("my_print_area").value;
  // 1) tester le format: longueur multiple de 3, présence de 4 lettres A.C.G.U. only...
  // 2) utiliser le tableau de transco "codon > protein" pour transcoder la chaine ARN
  // 3) afficher le résultat, précédé de la chaîne reçue
  if (!my_ARN_raw.match(/^[ACGU]+$/)) {
    window.alert("Hey le bonobo entre le clavier et le dossier, il semblerait que tu aies tenté d'utiliser d'autres paires nucléiques que celles autorisée ('A', 'U', 'C' et 'G' pour rappel). Try again !");
  }
  else {
    if (my_ARN_raw.length % 3 != 0) {
      window.alert("Bien, bien, bien... Alors tu as visiblement compris le truc des A/U/C/G mais sur le côté 'triplet de bases nucléiques', c'est pas encore ça. Essaye encore avec une chaîne d'ARN dont la longueur est un multiple de 3, va ;-)");
    }
    else {
      tmp_sequence = my_ARN_raw;
      while (tmp_sequence.length >= 3) {
        tmp_nucleid = tmp_sequence.substring(0, 3);                         // Select 3nuc sequence
        tmp_string += " | " + from_nucleotid_2_aminacids(tmp_nucleid);      // Transcode nucleotids into corresponding amin acid then add it to sequence
        tmp_sequence = tmp_sequence.slice(3);                               // Truncate sequence from its 3 first nuc then same player, play again
        tmp_split = tmp_split + "-" + tmp_nucleid;                          // Build the '-'split sequence
      }
      tmp_string = tmp_string.slice(3);                                     // Suppressing the extra " | " at the beginning
      tmp_split = tmp_split.slice(1);                                       // Same to suppress the extra "-" at start of the split sequence
      tmp_string = "Here is the sequence you gave me: \n\t > " + my_ARN_raw + "\nHere is the ARN sequencing I built out of it: \n\t > " + tmp_split + "\nAnd here is is transcodification in amin acids: \n\t > " + tmp_string;
      print_in_my_textarea(tmp_string);
    }
  }
}
