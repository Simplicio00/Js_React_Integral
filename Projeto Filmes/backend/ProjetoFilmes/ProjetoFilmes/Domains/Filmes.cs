using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoFilmes.Domains
{
    public partial class Filmes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdFilme { get; set; }

        // Define que a propriedade Titulo é obrigatória
        // Caso não seja informada, exibe a mensagem de erro
        [Required(ErrorMessage = "Informe o título do filme")]
        public string Titulo { get; set; }

        public int IdGenero { get; set; }

        [JsonProperty("genero")]
        public virtual Generos IdGeneroNavigation { get; set; }
    }
}
