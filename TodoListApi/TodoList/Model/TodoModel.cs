using System;
using System.ComponentModel.DataAnnotations;

namespace TodoList.Model
{
    /// <summary>
    /// class model TODO    
    /// </summary>
    [Serializable]
    public record TodoModel
    {
        /// <summary>
        /// key identifier 
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Title of my todo 
        /// </summary>
        [Required()]
        [StringLength(255)]
        public string Title { get; set; }

        /// <summary>
        /// State of my todo
        /// </summary>
        [Required()]
        public StateTodoEnum  State { get; set; }

        public string Detail { get; set; }
    }
}
