using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Helpers
{
    public class LogHelpers
    {
        private readonly string LogPath;
        private readonly string rootPath;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IConfigurationRoot _config;

        public LogHelpers(IConfigurationRoot config, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _config = config;          
            rootPath = _hostingEnvironment.WebRootPath; 
            LogPath = rootPath + "/" + _config.GetSection("DefaultLogPath").Value;        
        }

        public static List<TreeNode> GetFullLogTree()
        {
            return null;
        }

        private void BuildTree()
        {
        
        }

        private TreeNode CreateDirNode(DirectoryInfo directoryInfo)
        {
            return null;
        }
    }

    public class TreeNode
    {
        public List<TreeNode> children { get; set; }
        public string label { get; set; }
        public object data { get; set; }
        public bool leaf { get; set; }
        public TreeIcon icon { get; set; }
        public TreeIcon expandedIcon { get; set; }
        public TreeIcon collapsedIcon { get; set; }
        public bool expanded { get; set; }
        public TreeNode parent { get; set; }
    }

    public class TreeIcon
    {
        private TreeIcon(string icon) { Icon = icon; }

        public string Icon { get; set; }

        public static TreeIcon OpenFolder { get { return new TreeIcon("fa-folder-open"); } }
        public static TreeIcon ClosedFolder { get { return new TreeIcon("fa-folder"); } }
        public static TreeIcon TextFile { get { return new TreeIcon("fa-file-word-o"); } }
    }
}
