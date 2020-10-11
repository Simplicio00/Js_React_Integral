using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoFilmes.Domains
{
    public partial class Generos
    {
        public Generos()
        {
            Filmes = new HashSet<Filmes>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdGenero { get; set; }

        [Required(ErrorMessage = "Informe o nome do gênero")]
        public string Nome { get; set; }

        public virtual ICollection<Filmes> Filmes { get; set; }
    }
}
